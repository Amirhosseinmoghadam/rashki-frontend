import { useEffect, useState } from "react";

import Counter from "../../components/ui/Counter/Counter";
import SpecularButton from "../../components/ui/Button/SpecularButton";
import ElectricBorder from "../../components/ui/Border/ElectricBorder";

const OTP_DURATION = 120;

const Login = () => {
    const [phone, setPhone] = useState("");
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const [showOtpModal, setShowOtpModal] = useState(false);

    const [otp, setOtp] = useState("");
    const [timer, setTimer] = useState(OTP_DURATION);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    /*
     * --------------------------------------------------
     * Timer
     * --------------------------------------------------
     */

    useEffect(() => {
        if (!showOtpModal || timer <= 0) {
            return;
        }

        const interval = setInterval(() => {
            setTimer((current) =>
                current > 0 ? current - 1 : 0
            );
        }, 1000);

        return () => clearInterval(interval);
    }, [showOtpModal, timer]);

    /*
     * --------------------------------------------------
     * Helpers
     * --------------------------------------------------
     */

    const normalizePhone = (value) => {
        let digits = value.replace(/\D/g, "");

        if (digits.startsWith("98")) {
            digits = `0${digits.slice(2)}`;
        }

        if (!digits.startsWith("0") && digits.length <= 10) {
            digits = `0${digits}`;
        }

        return digits.slice(0, 11);
    };

    const isValidIranianPhone = (value) => {
        return /^09\d{9}$/.test(value);
    };

    const formatTimer = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        return {
            minutes,
            seconds: remainingSeconds,
        };
    };

    /*
     * --------------------------------------------------
     * Continue
     * --------------------------------------------------
     */

    const handleContinue = async (event) => {
        event.preventDefault();

        setError("");

        if (!isValidIranianPhone(phone)) {
            setError(
                "لطفاً یک شماره موبایل معتبر وارد کنید."
            );

            return;
        }

        if (!acceptedTerms) {
            setError(
                "برای ادامه باید قوانین و مقررات را بپذیرید."
            );

            return;
        }

        setLoading(true);

        try {
            /*
             * API:
             *
             * اینجا بعداً endpoint ارسال OTP بک‌اند قرار می‌گیرد.
             *
             * مثال:
             *
             * await authService.sendOtp({
             *   phone
             * });
             */

            await new Promise((resolve) =>
                setTimeout(resolve, 600)
            );

            setTimer(OTP_DURATION);
            setOtp("");
            setShowOtpModal(true);
        } catch (err) {
            setError(
                "ارسال کد تأیید با مشکل مواجه شد."
            );
        } finally {
            setLoading(false);
        }
    };

    /*
     * --------------------------------------------------
     * Verify OTP
     * --------------------------------------------------
     */

    const handleVerifyOtp = async (event) => {
        event.preventDefault();

        setError("");

        if (otp.length !== 6) {
            setError(
                "کد تأیید باید ۶ رقم باشد."
            );

            return;
        }

        setLoading(true);

        try {
            /*
             * API:
             *
             * این قسمت باید به بک‌اند وصل شود.
             *
             * مثال:
             *
             * const response =
             *   await authService.verifyOtp({
             *     phone,
             *     code: otp,
             *   });
             *
             * if (response.exists) {
             *   navigate("/dashboard");
             * } else {
             *   navigate("/dashboard");
             * }
             */

            await new Promise((resolve) =>
                setTimeout(resolve, 800)
            );

            console.log({
                phone,
                otp,
            });

            /*
             * بعد از اتصال API:
             *
             * کاربر موجود:
             * → Login
             * → Dashboard
             *
             * کاربر جدید:
             * → Create Account
             * → Dashboard
             * → تکمیل اطلاعات
             */

            setShowOtpModal(false);
        } catch (err) {
            setError(
                "کد تأیید صحیح نیست یا مشکلی رخ داده است."
            );
        } finally {
            setLoading(false);
        }
    };

    /*
     * --------------------------------------------------
     * Resend OTP
     * --------------------------------------------------
     */

    const handleResendOtp = async () => {
        if (timer > 0 || loading) {
            return;
        }

        setError("");
        setLoading(true);

        try {
            /*
             * API:
             *
             * await authService.sendOtp({
             *   phone
             * });
             */

            await new Promise((resolve) =>
                setTimeout(resolve, 500)
            );

            setTimer(OTP_DURATION);
            setOtp("");
        } catch (err) {
            setError(
                "ارسال مجدد کد با مشکل مواجه شد."
            );
        } finally {
            setLoading(false);
        }
    };

    const timerValue = formatTimer(timer);

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
            {/* Background glow */}

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

            {/* Login Card */}

            <div className="relative z-10 w-full max-w-md">
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
                        {/* Header */}

                        <div className="mb-8 text-center">
                            <div
                                className="
                  mx-auto
                  mb-6
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[var(--color-primary)]
                  text-2xl
                  font-black
                  text-white
                  shadow-lg
                  shadow-[rgba(var(--primary-rgb),0.2)]
                "
                            >
                                ر
                            </div>

                            <h1 className="text-3xl font-bold">
                                ورود به حساب
                            </h1>

                            <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
                                برای ورود یا ساخت حساب کاربری،
                                شماره موبایل خود را وارد کنید.
                            </p>
                        </div>

                        {/* Form */}

                        <form
                            onSubmit={handleContinue}
                            className="space-y-6"
                        >
                            {/* Phone */}

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
                                        onChange={(event) =>
                                            setPhone(
                                                normalizePhone(
                                                    event.target.value
                                                )
                                            )
                                        }
                                        placeholder="0912 345 6789"
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

                            {/* Terms */}

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
                                    onChange={(event) =>
                                        setAcceptedTerms(
                                            event.target.checked
                                        )
                                    }
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
                  </button>{" "}
                                    و شرایط استفاده از خدمات را
                  می‌پذیرم.
                </span>
                            </label>

                            {/* Error */}

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

                            {/* Submit */}

                            <SpecularButton
                                type="submit"
                                size="lg"
                                radius={16}
                                variant="primary"
                                className="w-full"
                                disabled={
                                    loading ||
                                    !acceptedTerms ||
                                    !phone
                                }
                            >
                                {loading
                                    ? "در حال ارسال..."
                                    : "ادامه"}
                            </SpecularButton>
                        </form>

                        {/* Footer */}

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

            {/* ========================================
          OTP Modal
      ======================================== */}

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
                        if (event.target === event.currentTarget) {
                            setShowOtpModal(false);
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
                        {/* Close */}

                        <button
                            type="button"
                            onClick={() =>
                                setShowOtpModal(false)
                            }
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
              "
                            aria-label="بستن"
                        >
                            ×
                        </button>

                        {/* Icon */}

                        <div className="mb-6 text-center">
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

                            <h2 className="mt-5 text-2xl font-bold">
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

                        {/* OTP */}

                        <form
                            onSubmit={handleVerifyOtp}
                            className="space-y-6"
                        >
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
                                    id="otp"
                                    type="text"
                                    inputMode="numeric"
                                    autoComplete="one-time-code"
                                    maxLength={6}
                                    value={otp}
                                    onChange={(event) => {
                                        const value =
                                            event.target.value
                                                .replace(/\D/g, "")
                                                .slice(0, 6);

                                        setOtp(value);
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

                            {/* Timer */}

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

                            {/* Error */}

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

                            {/* Verify */}

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

                            {/* Resend */}

                            <div className="text-center">
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