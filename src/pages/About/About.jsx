import { Link } from "react-router-dom";

import ElectricBorder from "../../components/ui/Border/ElectricBorder";
import SpecularButton from "../../components/ui/Button/SpecularButton";

function About() {
    const advantages = [
        {
            number: "01",
            title: "واردات و تأمین",
            description:
                "تمرکز راشلی بر تأمین و واردات قطعات و لوازم یدکی موردنیاز بازار موتورسیکلت است؛ با هدف ایجاد دسترسی مطمئن‌تر به کالا.",
        },
        {
            number: "02",
            title: "پخش عمده",
            description:
                "محصولات راشلی با رویکرد عمده‌فروشی در اختیار فروشندگان، توزیع‌کنندگان و فعالان بازار قطعات موتورسیکلت قرار می‌گیرد.",
        },
        {
            number: "03",
            title: "تنوع محصول",
            description:
                "تلاش ما ایجاد مجموعه‌ای متنوع از قطعات و لوازم یدکی برای پاسخ‌گویی بهتر به نیازهای مختلف بازار است.",
        },
        {
            number: "04",
            title: "همکاری بلندمدت",
            description:
                "راشلی همکاری را فقط یک معامله نمی‌داند؛ هدف ما ایجاد ارتباطی پایدار و قابل اعتماد با مشتریان و همکاران است.",
        },
    ];

    const values = [
        {
            title: "تأمین مطمئن",
            description:
                "ما تلاش می‌کنیم فرآیند تأمین قطعات برای همکارانمان قابل اتکا و منظم باشد.",
        },
        {
            title: "نگاه عمده‌فروشی",
            description:
                "ساختار فعالیت راشلی بر پایه نیاز بازار عمده و همکاری با فعالان این حوزه شکل گرفته است.",
        },
        {
            title: "تمرکز بر بازار موتور",
            description:
                "تمرکز تخصصی ما روی قطعات و لوازم یدکی موتورسیکلت است؛ بازاری که سرعت و دسترسی در آن اهمیت زیادی دارد.",
        },
    ];

    return (
        <section
            dir="rtl"
            className="
                relative
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
                    opacity-[0.07]
                    blur-[120px]
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
                    blur-[120px]
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

                <div
                    className="
                        grid
                        items-center
                        gap-12
                        lg:grid-cols-[1.15fr_0.85fr]
                        lg:gap-20
                    "
                >
                    {/* Hero Content */}

                    <div className="max-w-3xl">
                        <div
                            className="
                                mb-6
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
                                font-semibold
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

                            درباره راشلی
                        </div>

                        <h1
                            className="
                                text-4xl
                                font-black
                                leading-[1.2]
                                tracking-tight
                                sm:text-5xl
                                lg:text-7xl
                            "
                        >
                            تأمین قطعات،
                            <br />

                            <span className="text-[var(--color-primary)]">
                                آغاز یک حرکت مطمئن
                            </span>
                        </h1>

                        <p
                            className="
                                mt-7
                                max-w-2xl
                                text-lg
                                leading-9
                                text-[var(--color-text-muted)]
                                sm:text-xl
                            "
                        >
                            راشلی یک مجموعه تخصصی در زمینه
                            <strong className="font-bold text-[var(--color-text-main)]">
                                {" "}
                                واردات و پخش عمده لوازم یدکی
                                موتورسیکلت
                            </strong>{" "}
                            است؛ با تمرکز بر تأمین مطمئن،
                            تنوع محصول و ایجاد همکاری‌های
                            پایدار با فعالان بازار.
                        </p>

                        <p
                            className="
                                mt-5
                                max-w-2xl
                                text-base
                                leading-8
                                text-[var(--color-text-muted)]
                            "
                        >
                            ما تلاش می‌کنیم مسیر دسترسی فروشندگان
                            و همکاران بازار به قطعات موردنیازشان
                            را ساده‌تر، سریع‌تر و حرفه‌ای‌تر کنیم.
                            نگاه ما فقط به فروش یک محصول نیست؛
                            بلکه به ساختن یک زنجیره تأمین قابل
                            اعتماد برای کسب‌وکارهای این حوزه است.
                        </p>

                        {/* Buttons */}

                        <div
                            className="
                                mt-9
                                flex
                                flex-wrap
                                items-center
                                gap-4
                            "
                        >
                            <SpecularButton
                                size="lg"
                                radius={16}
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
                                onClick={() => {
                                    window.location.href =
                                        "/products";
                                }}
                            >
                                مشاهده محصولات
                            </SpecularButton>

                            <Link
                                to="/contact"
                                className="
                                    inline-flex
                                    h-12
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-[var(--color-border)]
                                    bg-[var(--color-surface)]
                                    px-6
                                    text-sm
                                    font-bold
                                    text-[var(--color-text-main)]
                                    transition
                                    duration-300
                                    hover:border-[var(--color-primary)]
                                    hover:text-[var(--color-primary)]
                                "
                            >
                                شروع همکاری
                            </Link>
                        </div>
                    </div>

                    {/* Brand Card */}

                    <div className="relative">
                        <ElectricBorder
                            color="#f5943a"
                            speed={0.7}
                            chaos={0.008}
                            thickness={1}
                            borderRadius={28}
                        >
                            <div
                                className="
                                    relative
                                    min-h-[390px]
                                    overflow-hidden
                                    rounded-[28px]
                                    border
                                    border-[var(--color-border)]
                                    bg-[var(--color-surface)]
                                    p-8
                                    sm:p-10
                                "
                            >
                                {/* Decorative circles */}

                                <div
                                    className="
                                        absolute
                                        -left-20
                                        -top-20
                                        h-64
                                        w-64
                                        rounded-full
                                        bg-[var(--color-primary)]
                                        opacity-[0.08]
                                        blur-3xl
                                    "
                                />

                                <div
                                    className="
                                        absolute
                                        -bottom-24
                                        -right-24
                                        h-72
                                        w-72
                                        rounded-full
                                        bg-[var(--color-primary)]
                                        opacity-[0.05]
                                        blur-3xl
                                    "
                                />

                                <div className="relative flex h-full min-h-[330px] flex-col justify-between">
                                    <div>
                                        <span
                                            className="
                                                text-sm
                                                font-bold
                                                tracking-[0.3em]
                                                text-[var(--color-primary)]
                                            "
                                            dir="ltr"
                                        >
                                            RASHLI
                                        </span>

                                        <h2
                                            className="
                                                mt-8
                                                text-3xl
                                                font-black
                                                leading-[1.35]
                                                sm:text-4xl
                                            "
                                        >
                                            شریک قابل اعتماد
                                            <br />

                                            <span className="text-[var(--color-primary)]">
                                                بازار قطعات موتور
                                            </span>
                                        </h2>

                                        <p
                                            className="
                                                mt-6
                                                max-w-md
                                                leading-8
                                                text-[var(--color-text-muted)]
                                            "
                                        >
                                            از تأمین و واردات تا
                                            پخش عمده؛ راشلی تلاش
                                            می‌کند در کنار کسب‌وکارهای
                                            فعال بازار موتورسیکلت،
                                            یک مسیر تأمین مطمئن ایجاد
                                            کند.
                                        </p>
                                    </div>

                                    <div
                                        className="
                                            mt-10
                                            flex
                                            items-end
                                            justify-between
                                            border-t
                                            border-[var(--color-border)]
                                            pt-6
                                        "
                                    >
                                        <div>
                                            <div
                                                className="
                                                    text-xs
                                                    text-[var(--color-text-muted)]
                                                "
                                            >
                                                حوزه فعالیت
                                            </div>

                                            <div className="mt-2 font-bold">
                                                لوازم یدکی موتورسیکلت
                                            </div>
                                        </div>

                                        <div
                                            className="
                                                text-5xl
                                                font-black
                                                text-[var(--color-primary)]
                                                opacity-20
                                            "
                                            dir="ltr"
                                        >
                                            R
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ElectricBorder>
                    </div>
                </div>

                {/* =================================================
                    BRAND STATEMENT
                ================================================= */}

                <div className="mt-28">
                    <ElectricBorder
                        color="#f5943a"
                        speed={0.45}
                        chaos={0.006}
                        borderRadius={24}
                    >
                        <div
                            className="
                                rounded-[24px]
                                border
                                border-[var(--color-border)]
                                bg-[var(--color-surface)]
                                px-6
                                py-10
                                text-center
                                sm:px-10
                                sm:py-14
                            "
                        >
                            <span
                                className="
                                    text-sm
                                    font-bold
                                    text-[var(--color-primary)]
                                "
                            >
                                فلسفه راشلی
                            </span>

                            <h2
                                className="
                                    mx-auto
                                    mt-4
                                    max-w-4xl
                                    text-3xl
                                    font-black
                                    leading-[1.5]
                                    sm:text-4xl
                                    lg:text-5xl
                                "
                            >
                                ما قطعه نمی‌فروشیم؛
                                <br />

                                <span className="text-[var(--color-primary)]">
                                    مسیر تأمین را مطمئن‌تر می‌کنیم.
                                </span>
                            </h2>

                            <p
                                className="
                                    mx-auto
                                    mt-6
                                    max-w-3xl
                                    text-base
                                    leading-8
                                    text-[var(--color-text-muted)]
                                "
                            >
                                برای یک فروشنده یا توزیع‌کننده،
                                دسترسی به قطعه مناسب فقط یک خرید
                                ساده نیست؛ بخشی از اعتبار و استمرار
                                کسب‌وکار اوست. راشلی با همین نگاه،
                                فعالیت خود را بر پایه تأمین،
                                پخش عمده و ایجاد روابط تجاری
                                پایدار بنا کرده است.
                            </p>
                        </div>
                    </ElectricBorder>
                </div>

                {/* =================================================
                    WHY RASHLI
                ================================================= */}

                <div className="mt-28">
                    <div className="max-w-2xl">
                        <span
                            className="
                                text-sm
                                font-bold
                                text-[var(--color-primary)]
                            "
                        >
                            چرا راشلی؟
                        </span>

                        <h2
                            className="
                                mt-3
                                text-3xl
                                font-black
                                sm:text-4xl
                            "
                        >
                            یک تأمین‌کننده،
                            <br />
                            برای یک همکاری بلندمدت
                        </h2>

                        <p
                            className="
                                mt-5
                                leading-8
                                text-[var(--color-text-muted)]
                            "
                        >
                            مدل فعالیت راشلی بر پایه همکاری با
                            فعالان بازار شکل گرفته است؛ به همین
                            دلیل تلاش می‌کنیم در کنار ارائه محصول،
                            تجربه‌ای حرفه‌ای و قابل اعتماد در
                            همکاری تجاری ایجاد کنیم.
                        </p>
                    </div>

                    <div
                        className="
                            mt-10
                            grid
                            gap-5
                            md:grid-cols-2
                            lg:grid-cols-4
                        "
                    >
                        {advantages.map((item) => (
                            <div
                                key={item.number}
                                className="
                                    group
                                    rounded-2xl
                                    border
                                    border-[var(--color-border)]
                                    bg-[var(--color-surface)]
                                    p-6
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-[var(--color-primary)]
                                    hover:shadow-lg
                                "
                            >
                                <div
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                    "
                                >
                                    <span
                                        className="
                                            text-3xl
                                            font-black
                                            text-[var(--color-primary)]
                                        "
                                    >
                                        {item.number}
                                    </span>

                                    <span
                                        className="
                                            h-2
                                            w-2
                                            rounded-full
                                            bg-[var(--color-primary)]
                                            opacity-40
                                            transition
                                            group-hover:opacity-100
                                        "
                                    />
                                </div>

                                <h3
                                    className="
                                        mt-8
                                        text-xl
                                        font-bold
                                    "
                                >
                                    {item.title}
                                </h3>

                                <p
                                    className="
                                        mt-3
                                        text-sm
                                        leading-7
                                        text-[var(--color-text-muted)]
                                    "
                                >
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* =================================================
                    VALUES
                ================================================= */}

                <div className="mt-28">
                    <div
                        className="
                            grid
                            gap-12
                            lg:grid-cols-[0.8fr_1.2fr]
                            lg:items-start
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
                                ارزش‌های ما
                            </span>

                            <h2
                                className="
                                    mt-3
                                    text-3xl
                                    font-black
                                    leading-[1.4]
                                    sm:text-4xl
                                "
                            >
                                چیزی فراتر از
                                <br />
                                یک فروشنده قطعه
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {values.map((item, index) => (
                                <div
                                    key={item.title}
                                    className="
                                        flex
                                        gap-5
                                        rounded-2xl
                                        border
                                        border-[var(--color-border)]
                                        bg-[var(--color-surface)]
                                        p-5
                                        sm:p-6
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            h-10
                                            w-10
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
                                        0{index + 1}
                                    </div>

                                    <div>
                                        <h3 className="font-bold">
                                            {item.title}
                                        </h3>

                                        <p
                                            className="
                                                mt-2
                                                text-sm
                                                leading-7
                                                text-[var(--color-text-muted)]
                                            "
                                        >
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* =================================================
                    FINAL CTA
                ================================================= */}

                <div className="mt-28">
                    <ElectricBorder
                        color="#f5943a"
                        speed={0.6}
                        chaos={0.008}
                        borderRadius={28}
                    >
                        <div
                            className="
                                overflow-hidden
                                rounded-[28px]
                                bg-[var(--color-primary)]
                                px-6
                                py-12
                                sm:px-10
                                lg:px-16
                                lg:py-14
                            "
                        >
                            <div
                                className="
                                    flex
                                    flex-col
                                    gap-8
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
                                            text-white/80
                                        "
                                    >
                                        همکاری با راشلی
                                    </span>

                                    <h2
                                        className="
                                            mt-3
                                            text-3xl
                                            font-black
                                            leading-[1.4]
                                            text-white
                                            sm:text-4xl
                                        "
                                    >
                                        برای تأمین قطعات،
                                        <br />
                                        روی راشلی حساب کنید.
                                    </h2>

                                    <p
                                        className="
                                            mt-4
                                            leading-8
                                            text-white/80
                                        "
                                    >
                                        اگر در زمینه فروش، پخش یا
                                        تأمین قطعات موتورسیکلت فعالیت
                                        می‌کنید، آماده‌ایم مسیر یک
                                        همکاری حرفه‌ای و بلندمدت را
                                        با شما آغاز کنیم.
                                    </p>
                                </div>

                                <Link
                                    to="/contact"
                                    className="
                                        shrink-0
                                        rounded-xl
                                        bg-white
                                        px-7
                                        py-3.5
                                        text-center
                                        font-bold
                                        text-[var(--color-primary)]
                                        transition
                                        duration-300
                                        hover:-translate-y-1
                                        hover:shadow-xl
                                    "
                                >
                                    شروع همکاری
                                </Link>
                            </div>
                        </div>
                    </ElectricBorder>
                </div>

                {/* =================================================
                    BRAND SLOGAN
                ================================================= */}

                <div className="mt-16 text-center">
                    <p
                        className="
                            text-sm
                            font-medium
                            text-[var(--color-text-muted)]
                        "
                    >
                        RASHLI
                    </p>

                    <h3
                        className="
                            mt-2
                            text-xl
                            font-black
                        "
                    >
                        تأمین مطمئن، حرکت مطمئن
                    </h3>
                </div>
            </div>
        </section>
    );
}

export default About;