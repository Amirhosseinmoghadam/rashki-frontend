import { useState } from "react";
import { Link } from "react-router-dom";

import ElectricBorder from "../../components/ui/Border/ElectricBorder";
import SpecularButton from "../../components/ui/Button/SpecularButton";

function Contact() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // فعلاً فقط برای UI
        // در مرحله بعد می‌توانیم این قسمت را به Django API متصل کنیم.

        console.log("Contact form:", form);

        setSubmitted(true);

        setTimeout(() => {
            setSubmitted(false);
        }, 4000);
    };

    return (
        <section
            dir="rtl"
            className="
                relative
                min-h-screen
                overflow-hidden
                bg-[var(--color-background)]
                text-[var(--color-text-main)]
                transition-colors
                duration-300
            "
        >
            {/* =====================================================
                BACKGROUND GLOW
            ===================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-40
                    -top-40
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-[var(--color-primary)]
                    opacity-[0.06]
                    blur-[130px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -bottom-40
                    -left-40
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-[var(--color-primary)]
                    opacity-[0.05]
                    blur-[130px]
                "
            />

            <div
                className="
                    relative
                    mx-auto
                    max-w-7xl
                    px-4
                    py-16
                    sm:px-6
                    sm:py-20
                    lg:px-8
                    lg:py-28
                "
            >
                {/* =================================================
                    HERO
                ================================================= */}

                <div className="mx-auto max-w-3xl text-center">
                    <span
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-[var(--color-border)]
                            bg-[var(--color-surface)]
                            px-4
                            py-2
                            text-sm
                            font-bold
                            text-[var(--color-primary)]
                        "
                    >
                        <span
                            className="
                                h-2
                                w-2
                                rounded-full
                                bg-[var(--color-primary)]
                                shadow-[0_0_12px_rgba(var(--primary-rgb),0.7)]
                            "
                        />

                        ارتباط با راشلی
                    </span>

                    <h1
                        className="
                            mt-6
                            text-4xl
                            font-black
                            leading-[1.25]
                            tracking-tight
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        آماده‌ایم
                        <span className="text-[var(--color-primary)]">
                            {" "}
                            صدای شما را بشنویم
                        </span>
                    </h1>

                    <p
                        className="
                            mx-auto
                            mt-6
                            max-w-2xl
                            text-base
                            leading-8
                            text-[var(--color-text-muted)]
                            sm:text-lg
                        "
                    >
                        برای دریافت اطلاعات محصولات، استعلام قیمت و
                        موجودی، همکاری در زمینه پخش و فروش عمده یا
                        هرگونه پرسش درباره محصولات راشلی، با ما در
                        ارتباط باشید.
                    </p>
                </div>

                {/* =================================================
                    CONTACT CONTENT
                ================================================= */}

                <div
                    className="
                        mt-16
                        grid
                        gap-6
                        lg:grid-cols-[0.8fr_1.2fr]
                        lg:gap-8
                    "
                >
                    {/* =================================================
                        CONTACT INFO
                    ================================================= */}

                    <div className="space-y-6">
                        <ElectricBorder
                            color="#f5943a"
                            speed={0.5}
                            chaos={0.006}
                            borderRadius={24}
                        >
                            <div
                                className="
                                    rounded-[24px]
                                    border
                                    border-[var(--color-border)]
                                    bg-[var(--color-surface)]
                                    p-7
                                    sm:p-8
                                "
                            >
                                <span
                                    className="
                                        text-sm
                                        font-bold
                                        text-[var(--color-primary)]
                                    "
                                >
                                    ارتباط مستقیم
                                </span>

                                <h2
                                    className="
                                        mt-3
                                        text-2xl
                                        font-black
                                    "
                                >
                                    در کنار شما هستیم
                                </h2>

                                <p
                                    className="
                                        mt-4
                                        text-sm
                                        leading-7
                                        text-[var(--color-text-muted)]
                                    "
                                >
                                    راشلی با هدف ایجاد همکاری‌های
                                    پایدار با فروشندگان، عمده‌فروشان
                                    و فعالان بازار قطعات موتورسیکلت
                                    فعالیت می‌کند.
                                </p>

                                <div className="mt-8 space-y-4">
                                    {/* Phone */}

                                    <a
                                        href="tel:+982100000000"
                                        className="
                                            group
                                            flex
                                            items-center
                                            gap-4
                                            rounded-2xl
                                            border
                                            border-[var(--color-border)]
                                            bg-[var(--color-background)]
                                            p-4
                                            transition
                                            duration-300
                                            hover:border-[var(--color-primary)]
                                        "
                                    >
                                        <div
                                            className="
                                                flex
                                                h-11
                                                w-11
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-xl
                                                bg-[var(--color-primary)]
                                                text-white
                                            "
                                        >
                                            <svg
                                                viewBox="0 0 24 24"
                                                className="h-5 w-5"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path
                                                    d="M22 16.92v3a2 2 0 0 1-2.18 2
                                                    19.79 19.79 0 0 1-8.63-3.07
                                                    19.5 19.5 0 0 1-6-6
                                                    19.79 19.79 0 0 1-3.07-8.67
                                                    A2 2 0 0 1 4.11 2h3
                                                    a2 2 0 0 1 2 1.72
                                                    12.84 12.84 0 0 0 .7 2.81
                                                    2 2 0 0 1-.45 2.11L8.09 9.91
                                                    a16 16 0 0 0 6 6l1.27-1.27
                                                    a2 2 0 0 1 2.11-.45
                                                    12.84 12.84 0 0 0 2.81.7
                                                    A2 2 0 0 1 22 16.92z"
                                                />
                                            </svg>
                                        </div>

                                        <div className="min-w-0">
                                            <div
                                                className="
                                                    text-xs
                                                    text-[var(--color-text-muted)]
                                                "
                                            >
                                                تماس تلفنی
                                            </div>

                                            <div
                                                className="
                                                    mt-1
                                                    font-bold
                                                    transition
                                                    group-hover:text-[var(--color-primary)]
                                                "
                                                dir="ltr"
                                            >
                                                021-0000-0000
                                            </div>
                                        </div>
                                    </a>

                                    {/* Mobile */}

                                    <a
                                        href="tel:+989000000000"
                                        className="
                                            group
                                            flex
                                            items-center
                                            gap-4
                                            rounded-2xl
                                            border
                                            border-[var(--color-border)]
                                            bg-[var(--color-background)]
                                            p-4
                                            transition
                                            duration-300
                                            hover:border-[var(--color-primary)]
                                        "
                                    >
                                        <div
                                            className="
                                                flex
                                                h-11
                                                w-11
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-xl
                                                border
                                                border-[var(--color-primary)]
                                                text-[var(--color-primary)]
                                            "
                                        >
                                            <svg
                                                viewBox="0 0 24 24"
                                                className="h-5 w-5"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <rect
                                                    x="5"
                                                    y="2"
                                                    width="14"
                                                    height="20"
                                                    rx="2"
                                                />

                                                <path d="M12 18h.01" />
                                            </svg>
                                        </div>

                                        <div className="min-w-0">
                                            <div
                                                className="
                                                    text-xs
                                                    text-[var(--color-text-muted)]
                                                "
                                            >
                                                همراه
                                            </div>

                                            <div
                                                className="
                                                    mt-1
                                                    font-bold
                                                    transition
                                                    group-hover:text-[var(--color-primary)]
                                                "
                                                dir="ltr"
                                            >
                                                0900 000 0000
                                            </div>
                                        </div>
                                    </a>

                                    {/* Address */}

                                    <div
                                        className="
                                            flex
                                            items-start
                                            gap-4
                                            rounded-2xl
                                            border
                                            border-[var(--color-border)]
                                            bg-[var(--color-background)]
                                            p-4
                                        "
                                    >
                                        <div
                                            className="
                                                flex
                                                h-11
                                                w-11
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-xl
                                                bg-[var(--color-primary)]/10
                                                text-[var(--color-primary)]
                                            "
                                        >
                                            <svg
                                                viewBox="0 0 24 24"
                                                className="h-5 w-5"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                                                <circle
                                                    cx="12"
                                                    cy="10"
                                                    r="2.5"
                                                />
                                            </svg>
                                        </div>

                                        <div>
                                            <div
                                                className="
                                                    text-xs
                                                    text-[var(--color-text-muted)]
                                                "
                                            >
                                                آدرس
                                            </div>

                                            <div
                                                className="
                                                    mt-1
                                                    font-bold
                                                    leading-7
                                                "
                                            >
                                                تهران، مرکز تأمین و
                                                پخش قطعات موتورسیکلت
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ElectricBorder>

                        {/* =================================================
                            COOPERATION CARD
                        ================================================= */}

                        <div
                            className="
                                rounded-2xl
                                border
                                border-[var(--color-border)]
                                bg-[var(--color-surface)]
                                p-6
                                sm:p-7
                            "
                        >
                            <div className="flex items-start gap-4">
                                <div
                                    className="
                                        flex
                                        h-11
                                        w-11
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-[var(--color-primary)]
                                        text-sm
                                        font-black
                                        text-white
                                    "
                                >
                                    R
                                </div>

                                <div>
                                    <h3 className="font-black">
                                        درخواست همکاری عمده
                                    </h3>

                                    <p
                                        className="
                                            mt-2
                                            text-sm
                                            leading-7
                                            text-[var(--color-text-muted)]
                                        "
                                    >
                                        اگر فروشگاه، مرکز پخش یا
                                        مجموعه فعال در حوزه قطعات
                                        موتورسیکلت دارید، از طریق
                                        فرم مقابل درخواست خود را
                                        برای ما ارسال کنید.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* =================================================
                        FORM
                    ================================================= */}

                    <ElectricBorder
                        color="#f5943a"
                        speed={0.4}
                        chaos={0.005}
                        borderRadius={24}
                    >
                        <div
                            className="
                                rounded-[24px]
                                border
                                border-[var(--color-border)]
                                bg-[var(--color-surface)]
                                p-6
                                sm:p-8
                                lg:p-10
                            "
                        >
                            <div>
                                <span
                                    className="
                                        text-sm
                                        font-bold
                                        text-[var(--color-primary)]
                                    "
                                >
                                    فرم ارتباط
                                </span>

                                <h2
                                    className="
                                        mt-3
                                        text-2xl
                                        font-black
                                        sm:text-3xl
                                    "
                                >
                                    درخواست خود را ارسال کنید
                                </h2>

                                <p
                                    className="
                                        mt-3
                                        text-sm
                                        leading-7
                                        text-[var(--color-text-muted)]
                                    "
                                >
                                    اطلاعات تماس و درخواست خود را
                                    وارد کنید. تیم راشلی در اولین
                                    فرصت با شما ارتباط خواهد گرفت.
                                </p>
                            </div>

                            <form
                                onSubmit={handleSubmit}
                                className="mt-8 space-y-5"
                            >
                                {/* Name */}

                                <div>
                                    <label
                                        htmlFor="name"
                                        className="
                                            mb-2
                                            block
                                            text-sm
                                            font-bold
                                        "
                                    >
                                        نام و نام خانوادگی
                                    </label>

                                    <input
                                        id="name"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        type="text"
                                        placeholder="نام و نام خانوادگی"
                                        className="
                                            h-12
                                            w-full
                                            rounded-xl
                                            border
                                            border-[var(--color-border)]
                                            bg-[var(--color-background)]
                                            px-4
                                            text-sm
                                            text-[var(--color-text-main)]
                                            outline-none
                                            transition
                                            placeholder:text-[var(--color-text-muted)]
                                            focus:border-[var(--color-primary)]
                                            focus:ring-2
                                            focus:ring-[var(--color-primary)]/10
                                        "
                                    />
                                </div>

                                {/* Phone + Subject */}

                                <div
                                    className="
                                        grid
                                        gap-5
                                        sm:grid-cols-2
                                    "
                                >
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="
                                                mb-2
                                                block
                                                text-sm
                                                font-bold
                                            "
                                        >
                                            شماره تماس
                                        </label>

                                        <input
                                            id="phone"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            required
                                            type="tel"
                                            inputMode="numeric"
                                            dir="ltr"
                                            placeholder="09123456789"
                                            className="
                                                h-12
                                                w-full
                                                rounded-xl
                                                border
                                                border-[var(--color-border)]
                                                bg-[var(--color-background)]
                                                px-4
                                                text-sm
                                                text-[var(--color-text-main)]
                                                outline-none
                                                transition
                                                placeholder:text-[var(--color-text-muted)]
                                                focus:border-[var(--color-primary)]
                                                focus:ring-2
                                                focus:ring-[var(--color-primary)]/10
                                            "
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="subject"
                                            className="
                                                mb-2
                                                block
                                                text-sm
                                                font-bold
                                            "
                                        >
                                            موضوع درخواست
                                        </label>

                                        <select
                                            id="subject"
                                            name="subject"
                                            value={form.subject}
                                            onChange={handleChange}
                                            required
                                            className="
                                                h-12
                                                w-full
                                                rounded-xl
                                                border
                                                border-[var(--color-border)]
                                                bg-[var(--color-background)]
                                                px-4
                                                text-sm
                                                text-[var(--color-text-main)]
                                                outline-none
                                                transition
                                                focus:border-[var(--color-primary)]
                                                focus:ring-2
                                                focus:ring-[var(--color-primary)]/10
                                            "
                                        >
                                            <option value="">
                                                انتخاب موضوع
                                            </option>

                                            <option value="cooperation">
                                                درخواست همکاری عمده
                                            </option>

                                            <option value="price">
                                                استعلام قیمت
                                            </option>

                                            <option value="inventory">
                                                استعلام موجودی
                                            </option>

                                            <option value="product">
                                                پرسش درباره محصول
                                            </option>

                                            <option value="other">
                                                سایر موارد
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                {/* Message */}

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="
                                            mb-2
                                            block
                                            text-sm
                                            font-bold
                                        "
                                    >
                                        توضیحات
                                    </label>

                                    <textarea
                                        id="message"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        placeholder="درخواست یا پیام خود را برای ما بنویسید..."
                                        className="
                                            w-full
                                            resize-none
                                            rounded-xl
                                            border
                                            border-[var(--color-border)]
                                            bg-[var(--color-background)]
                                            px-4
                                            py-3
                                            text-sm
                                            leading-7
                                            text-[var(--color-text-main)]
                                            outline-none
                                            transition
                                            placeholder:text-[var(--color-text-muted)]
                                            focus:border-[var(--color-primary)]
                                            focus:ring-2
                                            focus:ring-[var(--color-primary)]/10
                                        "
                                    />
                                </div>

                                {/* Success */}

                                {submitted && (
                                    <div
                                        className="
                                            rounded-xl
                                            border
                                            border-[var(--color-primary)]/30
                                            bg-[var(--color-primary)]/10
                                            px-4
                                            py-3
                                            text-sm
                                            font-medium
                                            text-[var(--color-primary)]
                                        "
                                    >
                                        درخواست شما با موفقیت ثبت شد.
                                        تیم راشلی به‌زودی با شما
                                        تماس خواهد گرفت.
                                    </div>
                                )}

                                {/* Submit */}

                                <div className="pt-2">
                                    <SpecularButton
                                        size="lg"
                                        radius={14}
                                        baseColor="var(--color-primary)"
                                        lineColor="var(--color-primary)"
                                        textColor="#ffffff"
                                        tint="#ffffff"
                                        tintOpacity={0.05}
                                        intensity={1}
                                        shineSize={10}
                                        shineFade={40}
                                        thickness={1}
                                        speed={0.35}
                                        followMouse
                                        proximity={250}
                                        type="submit"
                                    >
                                        ارسال درخواست
                                    </SpecularButton>
                                </div>
                            </form>
                        </div>
                    </ElectricBorder>
                </div>

                {/* =================================================
                    BUSINESS CTA
                ================================================= */}

                <div
                    className="
                        mt-20
                        rounded-2xl
                        border
                        border-[var(--color-border)]
                        bg-[var(--color-surface)]
                        p-7
                        sm:p-10
                    "
                >
                    <div
                        className="
                            flex
                            flex-col
                            gap-6
                            lg:flex-row
                            lg:items-center
                            lg:justify-between
                        "
                    >
                        <div className="max-w-2xl">
                            <span
                                className="
                                    text-sm
                                    font-bold
                                    text-[var(--color-primary)]
                                "
                            >
                                محصولات راشلی
                            </span>

                            <h2
                                className="
                                    mt-2
                                    text-2xl
                                    font-black
                                "
                            >
                                به دنبال قطعه موردنیاز خود هستید؟
                            </h2>

                            <p
                                className="
                                    mt-3
                                    text-sm
                                    leading-7
                                    text-[var(--color-text-muted)]
                                "
                            >
                                مجموعه محصولات و قطعات ارائه‌شده
                                توسط راشلی را مشاهده کنید و برای
                                دریافت اطلاعات بیشتر با ما در تماس
                                باشید.
                            </p>
                        </div>

                        <Link
                            to="/products"
                            className="
                                inline-flex
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-[var(--color-primary)]
                                px-6
                                py-3
                                font-bold
                                text-[var(--color-primary)]
                                transition
                                duration-300
                                hover:bg-[var(--color-primary)]
                                hover:text-white
                            "
                        >
                            مشاهده محصولات
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;