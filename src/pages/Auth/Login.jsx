import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Counter from "../../components/ui/Counter/Counter";
import SpecularButton from "../../components/ui/Button/SpecularButton";
import ElectricBorder from "../../components/ui/Border/ElectricBorder";

import { useAuth } from "../../context/AuthContext";
import authService from "../../services/authService";


const OTP_DURATION = 120;


const Login = () => {
    const navigate = useNavigate();

    const { login } = useAuth();

    const otpInputRef = useRef(null);


    // ============================================================
    // State
    // ============================================================

    const [phone, setPhone] = useState("");

    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const [showOtpModal, setShowOtpModal] = useState(false);

    const [otp, setOtp] = useState("");

    const [timer, setTimer] = useState(OTP_DURATION);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");


    // ============================================================
    // Timer
    // ============================================================

    useEffect(() => {
        if (!showOtpModal || timer <= 0) {
            return;
        }


        const interval = setInterval(() => {
            setTimer((current) => {
                if (current <= 1) {
                    return 0;
                }

                return current - 1;
            });
        }, 1000);


        return () => {
            clearInterval(interval);
        };
    }, [showOtpModal, timer]);


    // ============================================================
    // Focus OTP
    // ============================================================

    useEffect(() => {
        if (!showOtpModal) {
            return;
        }


        const timeout = setTimeout(() => {
            otpInputRef.current?.focus();
        }, 100);


        return () => {
            clearTimeout(timeout);
        };
    }, [showOtpModal]);


    // ============================================================
    // Helpers
    // ============================================================

    const normalizeDigits = (value) => {
        return value
            .replace(/[۰-۹]/g, (digit) => {
                return String(
                    "۰۱۲۳۴۵۶۷۸۹".indexOf(digit)
                );
            })
            .replace(/[٠-٩]/g, (digit) => {
                return String(
                    "٠١٢٣٤٥٦٧٨٩".indexOf(digit)
                );
            });
    };


    const normalizePhone = (value) => {
        let digits = normalizeDigits(value)
            .replace(/\D/g, "");


        /*
        ------------------------------------------------------------
        98xxxxxxxxxx
        تبدیل به
        0xxxxxxxxxx
        ------------------------------------------------------------
        */

        if (digits.startsWith("98")) {
            digits = `0${digits.slice(2)}`;
        }


        /*
        ------------------------------------------------------------
        اگر کاربر 9xxxxxxxxx وارد کرد
        صفر ابتدای آن اضافه می‌شود.

        مثال:

        9123456789
        ↓
        09123456789
        ------------------------------------------------------------
        */

        if (
            digits.length > 0 &&
            !digits.startsWith("0")
        ) {
            digits = `0${digits}`;
        }


        /*
        ------------------------------------------------------------
        فقط 11 رقم
        ------------------------------------------------------------
        */

        return digits.slice(0, 11);
    };


    const isValidIranianPhone = (value) => {
        return /^09\d{9}$/.test(value);
    };


    const normalizeOtp = (value) => {
        return normalizeDigits(value)
            .replace(/\D/g, "")
            .slice(0, 6);
    };


    const formatTimer = (seconds) => {
        const minutes = Math.floor(seconds / 60);

        const remainingSeconds =
            seconds % 60;


        return {
            minutes,
            seconds: remainingSeconds,
        };
    };


    const getErrorMessage = (error, fallback) => {
        const data =
            error?.response?.data ||
            error?.data ||
            {};


        return (
            data?.detail ||
            data?.message ||
            data?.phone_number?.[0] ||
            data?.otp?.[0] ||
            fallback
        );
    };


    // ============================================================
    // Phone Change
    // ============================================================

    const handlePhoneChange = (event) => {
        const value = normalizePhone(
            event.target.value
        );


        setPhone(value);

        if (error) {
            setError("");
        }
    };


    // ============================================================
    // Send OTP
    // ============================================================

    const handleContinue = async (event) => {
        event.preventDefault();


        setError("");


        // --------------------------------------------------------
        // Validate phone
        // --------------------------------------------------------

        if (!isValidIranianPhone(phone)) {
            setError(
                "لطفاً یک شماره موبایل معتبر وارد کنید."
            );

            return;
        }


        // --------------------------------------------------------
        // Validate terms
        // --------------------------------------------------------

        if (!acceptedTerms) {
            setError(
                "برای ادامه باید قوانین و مقررات را بپذیرید."
            );

            return;
        }


        setLoading(true);


        try {
            const response =
                await authService.sendOtp(phone);


            console.log(
                "Send OTP response:",
                response
            );


            const expiresIn =
                Number(
                    response?.expires_in
                ) || OTP_DURATION;


            setTimer(expiresIn);

            setOtp("");

            setError("");

            setShowOtpModal(true);

        } catch (error) {

            console.error(
                "Send OTP error:",
                error
            );


            setError(
                getErrorMessage(
                    error,
                    "ارسال کد تأیید با مشکل مواجه شد."
                )
            );

        } finally {

            setLoading(false);
        }
    };


    // ============================================================
    // Verify OTP
    // ============================================================

    const handleVerifyOtp = async (event) => {
        event?.preventDefault();


        setError("");


        if (otp.length !== 6) {
            setError(
                "لطفاً کد ۶ رقمی را کامل وارد کنید."
            );

            return;
        }


        setLoading(true);


        try {

            /*
            --------------------------------------------------------
            Verify OTP
            --------------------------------------------------------
            */

            const response =
                await authService.verifyOtp(
                    phone,
                    otp
                );


            console.log(
                "Verify OTP response:",
                response
            );


            console.log(
                "User:",
                response?.user
            );


            console.log(
                "Tokens:",
                response?.tokens
            );


            /*
            --------------------------------------------------------
            ذخیره Authentication
            --------------------------------------------------------

            اینجا دیگر مستقیماً localStorage را دستکاری نمی‌کنیم.

            AuthProvider مسئول:

            access_token
            refresh_token
            user

            است.
            --------------------------------------------------------
            */

            const loginSuccessful = login({
                user: response?.user,
                tokens: response?.tokens,
            });


            if (!loginSuccessful) {
                throw new Error(
                    "توکن ورود دریافت نشد."
                );
            }


            /*
            --------------------------------------------------------
            بستن Modal
            --------------------------------------------------------
            */

            setShowOtpModal(false);

            setOtp("");

            setError("");


            /*
            --------------------------------------------------------
            Redirect
            --------------------------------------------------------
            */

            if (
                response?.next ===
                "complete-profile"
            ) {

                navigate(
                    "/complete-profile",
                    {
                        replace: true,
                    }
                );

                return;
            }


            /*
            --------------------------------------------------------
            Default
            --------------------------------------------------------
            */

            navigate(
                "/",
                {
                    replace: true,
                }
            );

        } catch (error) {

            console.error(
                "Verify OTP error:",
                error
            );


            setError(
                getErrorMessage(
                    error,
                    "کد تأیید صحیح نیست یا منقضی شده است."
                )
            );

        } finally {

            setLoading(false);
        }
    };


    // ============================================================
    // Resend OTP
    // ============================================================

    const handleResendOtp = async () => {

        if (
            timer > 0 ||
            loading
        ) {
            return;
        }


        setError("");

        setLoading(true);


        try {

            const response =
                await authService.sendOtp(
                    phone
                );


            console.log(
                "Resend OTP response:",
                response
            );


            const expiresIn =
                Number(
                    response?.expires_in
                ) || OTP_DURATION;


            setTimer(expiresIn);

            setOtp("");


            setTimeout(() => {
                otpInputRef.current?.focus();
            }, 100);

        } catch (error) {

            console.error(
                "Resend OTP error:",
                error
            );


            const data =
                error?.response?.data ||
                error?.data ||
                {};


            if (
                error?.response?.status === 429 ||
                error?.status === 429
            ) {

                setError(
                    data?.detail ||
                    "تعداد درخواست‌ها بیش از حد مجاز است."
                );


                if (
                    data?.retry_after
                ) {

                    setTimer(
                        Number(
                            data.retry_after
                        )
                    );
                }

            } else {

                setError(
                    data?.detail ||
                    data?.message ||
                    "ارسال مجدد کد با مشکل مواجه شد."
                );
            }

        } finally {

            setLoading(false);
        }
    };


    // ============================================================
    // Close OTP Modal
    // ============================================================

    const closeOtpModal = () => {

        if (loading) {
            return;
        }


        setShowOtpModal(false);

        setOtp("");

        setError("");
    };


    // ============================================================
    // Timer
    // ============================================================

    const timerValue =
        formatTimer(timer);


    // ============================================================
    // Render
    // ============================================================

    return (
        <main
            dir="rtl"
            className="
                relative
                flex
                min-h-screen
                items-center
                justify-center
                overflow-hidden
                bg-[var(--color-background)]
                px-5
                py-12
                text-[var(--color-text-main)]
                transition-colors
                duration-300
                sm:px-8
            "
        >

            {/* =====================================================
                Background Glow
            ====================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-32
                    -top-32
                    h-96
                    w-96
                    rounded-full
                    bg-[var(--color-primary)]
                    opacity-[0.07]
                    blur-3xl
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -bottom-32
                    -left-32
                    h-96
                    w-96
                    rounded-full
                    bg-[var(--color-primary)]
                    opacity-[0.05]
                    blur-3xl
                "
            />


            {/* =====================================================
                Login Card
            ====================================================== */}

            <div
                className="
                    relative
                    z-10
                    w-full
                    max-w-md
                "
            >

                <ElectricBorder
                    color="var(--color-primary)"
                    speed={0.7}
                    chaos={0.01}
                    borderRadius={28}
                >

                    <div
                        className="
                            rounded-[28px]
                            border
                            border-[var(--color-border)]
                            bg-[var(--color-surface)]/95
                            p-7
                            shadow-2xl
                            backdrop-blur-xl
                            sm:p-9
                        "
                    >

                        {/* =================================================
                            Header
                        ================================================== */}

                        <div
                            className="
                                mb-8
                                text-center
                            "
                        >

                            <h1
                                className="
                                    text-3xl
                                    font-bold
                                "
                            >
                                ورود به حساب
                            </h1>


                            <p
                                className="
                                    mt-3
                                    text-sm
                                    leading-6
                                    text-[var(--color-text-muted)]
                                "
                            >
                                برای ورود یا ساخت حساب کاربری،
                                شماره موبایل خود را وارد کنید.
                            </p>

                        </div>


                        {/* =================================================
                            Form
                        ================================================== */}

                        <form
                            onSubmit={handleContinue}
                            className="space-y-6"
                        >

                            {/* =================================================
                                Phone
                            ================================================== */}

                            <div>

                                <label
                                    htmlFor="phone"
                                    className="
                                        mb-2
                                        block
                                        text-sm
                                        font-semibold
                                    "
                                >
                                    شماره موبایل
                                </label>


                                <div
                                    className="
                                        flex
                                        h-14
                                        overflow-hidden
                                        rounded-2xl
                                        border
                                        border-[var(--color-border)]
                                        bg-[var(--color-background)]
                                        transition
                                        focus-within:border-[var(--color-primary)]
                                        focus-within:ring-2
                                        focus-within:ring-[rgba(var(--primary-rgb),0.15)]
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            w-16
                                            shrink-0
                                            items-center
                                            justify-center
                                            border-l
                                            border-[var(--color-border)]
                                            text-sm
                                            font-semibold
                                            text-[var(--color-text-muted)]
                                        "
                                    >
                                        +98
                                    </div>


                                    <input
                                        id="phone"
                                        type="tel"
                                        inputMode="numeric"
                                        autoComplete="tel"
                                        value={phone}
                                        onChange={handlePhoneChange}
                                        placeholder="0912 345 6789"
                                        maxLength={11}
                                        className="
                                            min-w-0
                                            flex-1
                                            bg-transparent
                                            px-4
                                            text-left
                                            text-base
                                            font-medium
                                            outline-none
                                            placeholder:text-[var(--color-text-muted)]
                                            placeholder:opacity-50
                                        "
                                        dir="ltr"
                                    />

                                </div>

                            </div>


                            {/* =================================================
                                Terms
                            ================================================== */}

                            <label
                                className="
                                    flex
                                    cursor-pointer
                                    items-start
                                    gap-3
                                    select-none
                                "
                            >

                                <input
                                    type="checkbox"
                                    checked={acceptedTerms}
                                    onChange={(event) => {
                                        setAcceptedTerms(
                                            event.target.checked
                                        );

                                        if (error) {
                                            setError("");
                                        }
                                    }}
                                    className="
                                        mt-1
                                        h-4
                                        w-4
                                        cursor-pointer
                                        accent-[var(--color-primary)]
                                    "
                                />


                                <span
                                    className="
                                        text-xs
                                        leading-6
                                        text-[var(--color-text-muted)]
                                    "
                                >
                                    با ادامه دادن،{" "}

                                    <button
                                        type="button"
                                        className="
                                            font-semibold
                                            text-[var(--color-primary)]
                                            hover:underline
                                        "
                                    >
                                        قوانین و مقررات
                                    </button>

                                    {" "}
                                    و شرایط استفاده از خدمات را
                                    می‌پذیرم.
                                </span>

                            </label>


                            {/* =================================================
                                Error
                            ================================================== */}

                            {error && (
                                <div
                                    className="
                                        rounded-xl
                                        border
                                        border-red-500/20
                                        bg-red-500/5
                                        px-4
                                        py-3
                                        text-sm
                                        text-red-500
                                    "
                                >
                                    {error}
                                </div>
                            )}


                            {/* =================================================
                                Submit
                            ================================================== */}

                            <SpecularButton
                                type="submit"
                                size="lg"
                                radius={16}
                                variant="primary"
                                className="w-full"
                                disabled={
                                    loading ||
                                    !acceptedTerms ||
                                    !isValidIranianPhone(phone)
                                }
                            >
                                {loading
                                    ? "در حال ارسال..."
                                    : "ادامه"}
                            </SpecularButton>

                        </form>


                        {/* =================================================
                            Footer
                        ================================================== */}

                        <p
                            className="
                                mt-7
                                text-center
                                text-xs
                                leading-6
                                text-[var(--color-text-muted)]
                            "
                        >
                            ورود و ثبت‌نام با شماره موبایل انجام
                            می‌شود و نیازی به رمز عبور ندارید.
                        </p>

                    </div>

                </ElectricBorder>

            </div>


            {/* =========================================================
                OTP MODAL
            ========================================================== */}

            {showOtpModal && (

                <div
                    className="
                        fixed
                        inset-0
                        z-50
                        flex
                        items-center
                        justify-center
                        bg-black/50
                        px-5
                        py-8
                        backdrop-blur-md
                    "
                    onMouseDown={(event) => {

                        if (
                            event.target ===
                            event.currentTarget
                        ) {
                            closeOtpModal();
                        }

                    }}
                >

                    <div
                        className="
                            relative
                            w-full
                            max-w-md
                            overflow-hidden
                            rounded-3xl
                            border
                            border-[var(--color-border)]
                            bg-[var(--color-background)]
                            p-7
                            shadow-2xl
                            sm:p-9
                        "
                        dir="rtl"
                    >

                        {/* =================================================
                            Close
                        ================================================== */}

                        <button
                            type="button"
                            onClick={closeOtpModal}
                            disabled={loading}
                            className="
                                absolute
                                left-5
                                top-5
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-[var(--color-border)]
                                text-[var(--color-text-muted)]
                                transition
                                hover:border-[var(--color-primary)]
                                hover:text-[var(--color-primary)]
                                disabled:cursor-not-allowed
                                disabled:opacity-50
                            "
                            aria-label="بستن"
                        >
                            ×
                        </button>


                        {/* =================================================
                            Header
                        ================================================== */}

                        <div
                            className="
                                mb-6
                                text-center
                            "
                        >

                            <div
                                className="
                                    mx-auto
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-[var(--color-primary)]/10
                                    text-2xl
                                "
                            >
                                ✓
                            </div>


                            <h2
                                className="
                                    mt-5
                                    text-2xl
                                    font-bold
                                "
                            >
                                تأیید شماره موبایل
                            </h2>


                            <p
                                className="
                                    mx-auto
                                    mt-3
                                    max-w-xs
                                    text-sm
                                    leading-6
                                    text-[var(--color-text-muted)]
                                "
                            >
                                کد تأیید ارسال شده به شماره
                            </p>


                            <p
                                className="
                                    mt-1
                                    font-semibold
                                    text-[var(--color-text-main)]
                                "
                                dir="ltr"
                            >
                                {phone}
                            </p>

                        </div>


                        {/* =================================================
                            OTP Form
                        ================================================== */}

                        <form
                            onSubmit={handleVerifyOtp}
                            className="space-y-6"
                        >

                            {/* =================================================
                                OTP Input
                            ================================================== */}

                            <div>

                                <label
                                    htmlFor="otp"
                                    className="
                                        mb-2
                                        block
                                        text-center
                                        text-sm
                                        font-semibold
                                    "
                                >
                                    کد ۶ رقمی
                                </label>


                                <input
                                    ref={otpInputRef}
                                    id="otp"
                                    type="text"
                                    inputMode="numeric"
                                    autoComplete="one-time-code"
                                    maxLength={6}
                                    value={otp}
                                    onChange={(event) => {

                                        const value =
                                            normalizeOtp(
                                                event.target.value
                                            );


                                        setOtp(value);


                                        if (error) {
                                            setError("");
                                        }

                                    }}
                                    placeholder="------"
                                    className="
                                        h-16
                                        w-full
                                        rounded-2xl
                                        border
                                        border-[var(--color-border)]
                                        bg-[var(--color-surface)]
                                        text-center
                                        text-2xl
                                        font-bold
                                        tracking-[0.7em]
                                        outline-none
                                        transition
                                        focus:border-[var(--color-primary)]
                                        focus:ring-2
                                        focus:ring-[rgba(var(--primary-rgb),0.15)]
                                    "
                                    dir="ltr"
                                />

                            </div>


                            {/* =================================================
                                Timer
                            ================================================== */}

                            <div
                                className="
                                    flex
                                    flex-col
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    border
                                    border-[var(--color-border)]
                                    bg-[var(--color-surface)]
                                    py-5
                                "
                            >

                                <span
                                    className="
                                        mb-3
                                        text-xs
                                        text-[var(--color-text-muted)]
                                    "
                                >
                                    زمان باقی‌مانده
                                </span>


                                <Counter
                                    value={timer}
                                    places={[100, 10, 1]}
                                    fontSize={48}
                                    padding={4}
                                    gap={0}
                                    textColor="var(--color-primary)"
                                    fontWeight={900}
                                    digitPlaceHolders={false}
                                    gradientFrom="var(--color-surface)"
                                    gradientTo="transparent"
                                    counterStyle={{
                                        direction: "ltr",
                                    }}
                                />


                                <div
                                    className="
                                        mt-2
                                        text-xs
                                        font-medium
                                        text-[var(--color-text-muted)]
                                    "
                                >
                                    ثانیه
                                </div>

                            </div>


                            {/* =================================================
                                Error
                            ================================================== */}

                            {error && (

                                <div
                                    className="
                                        rounded-xl
                                        border
                                        border-red-500/20
                                        bg-red-500/5
                                        px-4
                                        py-3
                                        text-center
                                        text-sm
                                        text-red-500
                                    "
                                >
                                    {error}
                                </div>

                            )}


                            {/* =================================================
                                Verify
                            ================================================== */}

                            <SpecularButton
                                type="submit"
                                size="lg"
                                radius={16}
                                variant="primary"
                                className="w-full"
                                disabled={
                                    loading ||
                                    otp.length !== 6
                                }
                            >
                                {loading
                                    ? "در حال بررسی..."
                                    : "تأیید و ورود"}
                            </SpecularButton>


                            {/* =================================================
                                Resend
                            ================================================== */}

                            <div
                                className="
                                    text-center
                                "
                            >

                                {timer > 0 ? (

                                    <span
                                        className="
                                            text-xs
                                            text-[var(--color-text-muted)]
                                        "
                                    >
                                        امکان ارسال مجدد تا پایان
                                        زمان وجود ندارد.
                                    </span>

                                ) : (

                                    <button
                                        type="button"
                                        onClick={handleResendOtp}
                                        disabled={loading}
                                        className="
                                            text-sm
                                            font-semibold
                                            text-[var(--color-primary)]
                                            hover:underline
                                            disabled:opacity-50
                                        "
                                    >
                                        ارسال مجدد کد
                                    </button>

                                )}

                            </div>

                        </form>

                    </div>

                </div>

            )}

        </main>
    );
};


export default Login;