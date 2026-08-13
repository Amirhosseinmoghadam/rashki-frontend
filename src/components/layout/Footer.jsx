import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faArrowLeft,
    faBoxOpen,
    faCircleQuestion,
    faEnvelope,
    faLocationDot,
    faMotorcycle,
    faPhone,
    faShieldHalved,
    faTruckFast,
} from "@fortawesome/free-solid-svg-icons";



import {
    faInstagram,
    faTelegram,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        products: [
            {
                name: "قطعات موتور",
                path: "/products",
            },
            {
                name: "لوازم مصرفی",
                path: "/products",
            },
            {
                name: "لوازم بدنه",
                path: "/products",
            },
            {
                name: "لوازم جانبی",
                path: "/products",
            },
        ],

        support: [
            {
                name: "پیگیری سفارش",
                path: "/",
            },
            {
                name: "شرایط ارسال",
                path: "/",
            },
            {
                name: "شرایط بازگشت کالا",
                path: "/",
            },
            {
                name: "سوالات متداول",
                path: "/",
            },
        ],

        company: [
            {
                name: "درباره راشکی",
                path: "/about",
            },
            {
                name: "تماس با ما",
                path: "/contact",
            },
            {
                name: "قوانین و مقررات",
                path: "/",
            },
            {
                name: "حریم خصوصی",
                path: "/",
            },
        ],
    };

    return (
        <footer
            dir="rtl"
            className="
        mt-20
        border-t
        border-border
        bg-surface
      "
        >
            {/* خدمات فروشگاه */}

            <div className="border-b border-border">
                <div
                    className="
            mx-auto
            grid
            max-w-7xl
            gap-6
            px-4
            py-8
            sm:grid-cols-2
            sm:px-6
            lg:grid-cols-4
            lg:px-8
          "
                >
                    {/* ارسال سریع */}

                    <div className="flex items-center gap-4">
                        <div
                            className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-primary/10
                text-primary
              "
                        >
                            <FontAwesomeIcon
                                icon={faTruckFast}
                                className="text-xl"
                            />
                        </div>

                        <div>
                            <h3 className="font-bold text-text-main">
                                ارسال سریع
                            </h3>

                            <p className="mt-1 text-sm text-text-muted">
                                ارسال سفارش در سریع‌ترین زمان
                            </p>
                        </div>
                    </div>

                    {/* ضمانت اصالت */}

                    <div className="flex items-center gap-4">
                        <div
                            className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-primary/10
                text-primary
              "
                        >
                            <FontAwesomeIcon
                                icon={faShieldHalved}
                                className="text-xl"
                            />
                        </div>

                        <div>
                            <h3 className="font-bold text-text-main">
                                ضمانت اصالت کالا
                            </h3>

                            <p className="mt-1 text-sm text-text-muted">
                                خرید مطمئن و با کیفیت
                            </p>
                        </div>
                    </div>

                    {/* بسته‌بندی */}

                    <div className="flex items-center gap-4">
                        <div
                            className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-primary/10
                text-primary
              "
                        >
                            <FontAwesomeIcon
                                icon={faBoxOpen}
                                className="text-xl"
                            />
                        </div>

                        <div>
                            <h3 className="font-bold text-text-main">
                                بسته‌بندی مطمئن
                            </h3>

                            <p className="mt-1 text-sm text-text-muted">
                                محافظت کامل از سفارش شما
                            </p>
                        </div>
                    </div>

                    {/* پشتیبانی */}

                    <div className="flex items-center gap-4">
                        <div
                            className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-primary/10
                text-primary
              "
                        >
                            <FontAwesomeIcon
                                icon={faCircleQuestion}
                                className="text-xl"
                            />
                        </div>

                        <div>
                            <h3 className="font-bold text-text-main">
                                پشتیبانی مشتریان
                            </h3>

                            <p className="mt-1 text-sm text-text-muted">
                                پاسخ‌گویی به سوالات شما
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* بخش اصلی Footer */}

            <div
                className="
          mx-auto
          max-w-7xl
          px-4
          py-14
          sm:px-6
          lg:px-8
        "
            >
                <div
                    className="
            grid
            gap-10
            md:grid-cols-2
            lg:grid-cols-5
          "
                >
                    {/* برند راشکی */}

                    <div className="lg:col-span-2">
                        <Link
                            to="/"
                            className="
                inline-flex
                items-center
                gap-3
              "
                        >
                            <div
                                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-primary
                  text-white
                "
                            >
                                <FontAwesomeIcon
                                    icon={faMotorcycle}
                                    className="text-2xl"
                                />
                            </div>

                            <div>
                <span
                    className="
                    block
                    text-2xl
                    font-black
                    text-text-main
                  "
                >
                  راشکی
                </span>

                                <span className="text-xs text-text-muted">
                  فروشگاه لوازم یدکی موتورسیکلت
                </span>
                            </div>
                        </Link>

                        <p
                            className="
                mt-6
                max-w-md
                text-sm
                leading-8
                text-text-muted
              "
                        >
                            راشکی فروشگاه تخصصی لوازم یدکی موتورسیکلت است.
                            تلاش ما این است که خرید قطعات مورد نیاز موتورسیکلت
                            را برای شما آسان، مطمئن و سریع کنیم.
                        </p>

                        {/* اطلاعات تماس */}

                        <div className="mt-7 space-y-4">
                            <a
                                href="tel:02112345678"
                                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-text-muted
                  transition-colors
                  hover:text-primary
                "
                            >
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    className="text-primary"
                                />

                                <span dir="ltr">
                  021-12345678
                </span>
                            </a>

                            <a
                                href="mailto:info@rashki.ir"
                                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-text-muted
                  transition-colors
                  hover:text-primary
                "
                            >
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="text-primary"
                                />

                                <span dir="ltr">
                  info@rashki.ir
                </span>
                            </a>

                            <div
                                className="
                  flex
                  items-start
                  gap-3
                  text-sm
                  leading-7
                  text-text-muted
                "
                            >
                                <FontAwesomeIcon
                                    icon={faLocationDot}
                                    className="
                    mt-1
                    text-primary
                  "
                                />

                                <span>
                  تهران، ایران
                </span>
                            </div>
                        </div>
                    </div>

                    {/* محصولات */}

                    <div>
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon
                                icon={faBoxOpen}
                                className="text-primary"
                            />

                            <h3 className="font-bold text-text-main">
                                محصولات
                            </h3>
                        </div>

                        <ul className="mt-6 space-y-4">
                            {footerLinks.products.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        className="
                      group
                      flex
                      items-center
                      gap-2
                      text-sm
                      text-text-muted
                      transition-colors
                      hover:text-primary
                    "
                                    >
                                        <FontAwesomeIcon
                                            icon={faArrowLeft}
                                            className="
                        text-xs
                        transition-transform
                        group-hover:-translate-x-1
                      "
                                        />

                                        <span>
                      {item.name}
                    </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* خدمات مشتریان */}

                    <div>
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon
                                icon={faCircleQuestion}
                                className="text-primary"
                            />

                            <h3 className="font-bold text-text-main">
                                خدمات مشتریان
                            </h3>
                        </div>

                        <ul className="mt-6 space-y-4">
                            {footerLinks.support.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        className="
                      group
                      flex
                      items-center
                      gap-2
                      text-sm
                      text-text-muted
                      transition-colors
                      hover:text-primary
                    "
                                    >
                                        <FontAwesomeIcon
                                            icon={faArrowLeft}
                                            className="
                        text-xs
                        transition-transform
                        group-hover:-translate-x-1
                      "
                                        />

                                        <span>
                      {item.name}
                    </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* راشکی */}

                    <div>
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon
                                icon={faMotorcycle}
                                className="text-primary"
                            />

                            <h3 className="font-bold text-text-main">
                                راشکی
                            </h3>
                        </div>

                        <ul className="mt-6 space-y-4">
                            {footerLinks.company.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        className="
                      group
                      flex
                      items-center
                      gap-2
                      text-sm
                      text-text-muted
                      transition-colors
                      hover:text-primary
                    "
                                    >
                                        <FontAwesomeIcon
                                            icon={faArrowLeft}
                                            className="
                        text-xs
                        transition-transform
                        group-hover:-translate-x-1
                      "
                                        />

                                        <span>
                      {item.name}
                    </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* پایین Footer */}

            <div className="border-t border-border">
                <div
                    className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-5
            px-4
            py-6
            text-center
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-6
            lg:px-8
          "
                >
                    <p className="text-sm text-text-muted">
                        © {currentYear} تمامی حقوق برای فروشگاه راشکی محفوظ است.
                    </p>

                    {/* شبکه‌های اجتماعی */}

                    <div
                        className="
              flex
              items-center
              justify-center
              gap-3
            "
                    >
                        <a
                            href="#"
                            aria-label="اینستاگرام راشکی"
                            className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-background
                text-text-muted
                transition-all
                duration-200
                hover:-translate-y-1
                hover:bg-primary
                hover:text-white
              "
                        >
                            <FontAwesomeIcon
                                icon={faInstagram}
                                className="text-lg"
                            />
                        </a>

                        <a
                            href="#"
                            aria-label="تلگرام راشکی"
                            className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-background
                text-text-muted
                transition-all
                duration-200
                hover:-translate-y-1
                hover:bg-primary
                hover:text-white
              "
                        >
                            <FontAwesomeIcon
                                icon={faTelegram}
                                className="text-lg"
                            />
                        </a>

                        <a
                            href="#"
                            aria-label="واتساپ راشکی"
                            className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-background
                text-text-muted
                transition-all
                duration-200
                hover:-translate-y-1
                hover:bg-primary
                hover:text-white
              "
                        >
                            <FontAwesomeIcon
                                icon={faWhatsapp}
                                className="text-lg"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;