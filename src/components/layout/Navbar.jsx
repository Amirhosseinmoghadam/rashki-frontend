import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faBars,
    faXmark,
    faMagnifyingGlass,
    faCartShopping,
    faUser,
    faSun,
    faMoon,
    faHouse,
    faBoxOpen,
    faLayerGroup,
    faTags,
    faCircleInfo,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";

import { useTheme } from "../../hooks/useTheme";

import ThemeToggle from "../common/ThemeToggle";

import logo from "../../assets/images/logo.svg";


function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const location = useLocation();

    const { isDark, toggleTheme } = useTheme();


    const navItems = [
        {
            label: "خانه",
            path: "/",
            icon: faHouse,
        },
        {
            label: "محصولات",
            path: "/products",
            icon: faBoxOpen,
        },
        {
            label: "دسته‌بندی‌ها",
            path: "/categories",
            icon: faLayerGroup,
        },
        {
            label: "برندها",
            path: "/brands",
            icon: faTags,
        },
        {
            label: "درباره ما",
            path: "/about",
            icon: faCircleInfo,
        },
        {
            label: "تماس با ما",
            path: "/contact",
            icon: faPhone,
        },
    ];


    const isActive = (path) => {
        if (path === "/") {
            return location.pathname === "/";
        }

        return location.pathname.startsWith(path);
    };


    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };


    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };


    return (
        <>
            {/* =====================================================
                NAVBAR
            ====================================================== */}

            <header
                className="
                    sticky
                    top-0
                    z-50
                    w-full
                    border-b
                    border-[var(--color-border)]
                    bg-[var(--color-background)]/90
                    backdrop-blur-xl
                    transition-colors
                    duration-300
                "
            >
                <div
                    className="
                        mx-auto
                        flex
                        h-[76px]
                        max-w-7xl
                        items-center
                        justify-between
                        gap-4
                        px-4
                        sm:px-6
                        lg:px-8
                    "
                    dir="rtl"
                >

                    {/* =================================================
                        MOBILE MENU BUTTON
                        در RTL سمت چپ قرار می‌گیرد
                    ================================================== */}

                    <button
                        type="button"
                        aria-label={
                            mobileMenuOpen
                                ? "بستن منو"
                                : "باز کردن منو"
                        }
                        aria-expanded={mobileMenuOpen}
                        onClick={toggleMobileMenu}
                        className="
        order-1
        flex
        h-11
        w-11
        shrink-0
        items-center
        justify-center
        rounded-xl
        border
        border-[var(--color-border)]
        bg-[var(--color-surface)]
        text-[var(--color-text-main)]
        transition-all
        duration-300
        hover:border-[var(--color-primary)]
        hover:text-[var(--color-primary)]
        lg:hidden
    "
                    >
                        <FontAwesomeIcon
                            icon={
                                mobileMenuOpen
                                    ? faXmark
                                    : faBars
                            }
                            className="text-lg"
                        />
                    </button>


                    {/* =================================================
                        LOGO
                        در RTL سمت راست قرار می‌گیرد
                    ================================================== */}

                    <Link
                        to="/"
                        onClick={closeMobileMenu}
                        className="
                            order-1
                            flex
                            shrink-0
                            items-center
                            gap-3
                        "
                    >

                        <div
                            className="
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                overflow-hidden
                                rounded-xl
                                bg-[#0f1720]
                                p-2
                                shadow-lg
                            "
                        >
                            <img
                                src={logo}
                                alt="راشکی"
                                className="
                                    h-full
                                    w-full
                                    object-contain
                                "
                            />
                        </div>


                        <div className="hidden sm:block">
                            <h1
                                className="
                                    text-lg
                                    font-black
                                    text-[var(--color-text-main)]
                                "
                            >
                                راشکی
                            </h1>

                            <span
                                className="
                                    text-xs
                                    text-[var(--color-text-muted)]
                                "
                            >
                                لوازم یدکی موتورسیکلت
                            </span>
                        </div>

                    </Link>


                    {/* =================================================
                        DESKTOP NAVIGATION
                    ================================================== */}

                    <nav
                        className="
                            order-2
                            hidden
                            items-center
                            gap-1
                            lg:flex
                        "
                    >

                        {navItems.map((item) => {
                            const active = isActive(item.path);

                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`
                                        relative
                                        rounded-xl
                                        px-4
                                        py-2.5
                                        text-sm
                                        font-bold
                                        transition-all
                                        duration-300

                                        ${
                                        active
                                            ? `
                                                    bg-[var(--color-primary)]/10
                                                    text-[var(--color-primary)]
                                                `
                                            : `
                                                    text-[var(--color-text-muted)]
                                                    hover:bg-[var(--color-surface)]
                                                    hover:text-[var(--color-primary)]
                                                `
                                    }
                                    `}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}

                    </nav>


                    {/* =================================================
                        DESKTOP ACTIONS
                    ================================================== */}

                    <div
                        className="
                            order-3
                            hidden
                            items-center
                            gap-2
                            lg:flex
                        "
                    >

                        {/* Search */}

                        <button
                            type="button"
                            aria-label="جستجو"
                            className="
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-[var(--color-border)]
                                bg-[var(--color-surface)]
                                text-[var(--color-text-main)]
                                transition-all
                                duration-300
                                hover:border-[var(--color-primary)]
                                hover:text-[var(--color-primary)]
                            "
                        >
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                            />
                        </button>


                        {/* Cart */}

                        <Link
                            to="/cart"
                            aria-label="سبد خرید"
                            className="
                                relative
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-[var(--color-border)]
                                bg-[var(--color-surface)]
                                text-[var(--color-text-main)]
                                transition-all
                                duration-300
                                hover:border-[var(--color-primary)]
                                hover:text-[var(--color-primary)]
                            "
                        >
                            <FontAwesomeIcon
                                icon={faCartShopping}
                            />

                            <span
                                className="
                                    absolute
                                    -right-1
                                    -top-1
                                    flex
                                    h-5
                                    min-w-5
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[var(--color-primary)]
                                    px-1
                                    text-[10px]
                                    font-bold
                                    text-white
                                "
                            >
                                0
                            </span>

                        </Link>


                        {/* Theme */}

                        <ThemeToggle />


                        {/* Login */}

                        <Link
                            to="/login"
                            className="
                                flex
                                items-center
                                gap-2
                                rounded-xl
                                bg-[var(--color-primary)]
                                px-4
                                py-3
                                text-sm
                                font-bold
                                text-white
                                shadow-lg
                                shadow-[rgba(var(--primary-rgb),0.20)]
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:shadow-xl
                            "
                        >
                            <FontAwesomeIcon
                                icon={faUser}
                            />

                            <span>
                                ورود | ثبت‌نام
                            </span>

                        </Link>

                    </div>

                </div>
            </header>


            {/* =========================================================
                MOBILE MENU OVERLAY
            ========================================================== */}

            {mobileMenuOpen && (
                <div
                    className="
                        fixed
                        inset-0
                        z-[60]
                        bg-black/40
                        backdrop-blur-sm
                        lg:hidden
                    "
                    onClick={closeMobileMenu}
                />
            )}


            {/* =========================================================
                MOBILE MENU
                از سمت راست باز می‌شود
            ========================================================== */}

            <aside
                dir="rtl"
                className={`
                    fixed
                    right-0
                    top-0
                    z-[70]
                    flex
                    h-dvh
                    w-[min(88vw,380px)]
                    flex-col
                    border-l
                    border-[var(--color-border)]
                    bg-[var(--color-background)]
                    shadow-2xl
                    transition-transform
                    duration-300
                    ease-out
                    lg:hidden

                    ${
                    mobileMenuOpen
                        ? "translate-x-0"
                        : "translate-x-full"
                }
                `}
            >

                {/* =================================================
                    MOBILE HEADER
                ================================================== */}

                <div
                    className="
                        flex
                        h-[76px]
                        shrink-0
                        items-center
                        justify-between
                        border-b
                        border-[var(--color-border)]
                        px-5
                    "
                >

                    <Link
                        to="/"
                        onClick={closeMobileMenu}
                        className="
                            flex
                            items-center
                            gap-3
                        "
                    >

                        <div
                            className="
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                overflow-hidden
                                rounded-xl
                                bg-[#0f1720]
                                p-2
                                shadow-md
                            "
                        >
                            <img
                                src={logo}
                                alt="راشکی"
                                className="
                                    h-full
                                    w-full
                                    object-contain
                                "
                            />
                        </div>


                        <div>
                            <h2
                                className="
                                    text-base
                                    font-black
                                    text-[var(--color-text-main)]
                                "
                            >
                                راشکی
                            </h2>

                            <p
                                className="
                                    text-[10px]
                                    text-[var(--color-text-muted)]
                                "
                            >
                                لوازم یدکی موتورسیکلت
                            </p>
                        </div>

                    </Link>


                    {/* Close */}

                    <button
                        type="button"
                        aria-label="بستن منو"
                        onClick={closeMobileMenu}
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-[var(--color-border)]
                            bg-[var(--color-surface)]
                            text-[var(--color-text-main)]
                            transition-all
                            duration-300
                            hover:border-[var(--color-primary)]
                            hover:text-[var(--color-primary)]
                        "
                    >
                        <FontAwesomeIcon
                            icon={faXmark}
                        />
                    </button>

                </div>


                {/* =================================================
                    MOBILE NAVIGATION
                ================================================== */}

                <nav
                    className="
                        flex
                        flex-1
                        flex-col
                        gap-2
                        overflow-y-auto
                        p-4
                    "
                >

                    {navItems.map((item) => {
                        const active = isActive(item.path);

                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={closeMobileMenu}
                                className={`
                                    flex
                                    min-h-[54px]
                                    items-center
                                    gap-4
                                    rounded-2xl
                                    px-4
                                    text-sm
                                    font-bold
                                    transition-all
                                    duration-300

                                    ${
                                    active
                                        ? `
                                                bg-[var(--color-primary)]/10
                                                text-[var(--color-primary)]
                                            `
                                        : `
                                                text-[var(--color-text-main)]
                                                hover:bg-[var(--color-surface)]
                                                hover:text-[var(--color-primary)]
                                            `
                                }
                                `}
                            >

                                <span
                                    className={`
                                        flex
                                        h-9
                                        w-9
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-xl
                                        transition-colors
                                        duration-300

                                        ${
                                        active
                                            ? `
                                                    bg-[var(--color-primary)]
                                                    text-white
                                                `
                                            : `
                                                    bg-[var(--color-surface)]
                                                    text-[var(--color-text-muted)]
                                                `
                                    }
                                    `}
                                >
                                    <FontAwesomeIcon
                                        icon={item.icon}
                                    />
                                </span>


                                <span>
                                    {item.label}
                                </span>

                            </Link>
                        );
                    })}


                    {/* =================================================
                        MOBILE THEME
                    ================================================== */}

                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label="تغییر تم"
                        className="
                            relative
                            mt-2
                            flex
                            min-h-[60px]
                            w-full
                            items-center
                            justify-between
                            overflow-hidden
                            rounded-2xl
                            border
                            border-[var(--color-border)]
                            bg-[var(--color-surface)]
                            px-4
                            text-sm
                            font-bold
                            text-[var(--color-text-main)]
                            transition-all
                            duration-300
                            hover:border-[var(--color-primary)]
                        "
                    >

                        {/* Right Content */}

                        <span
                            className="
                                flex
                                items-center
                                gap-3
                            "
                        >

                            <span
                                className="
                                    flex
                                    h-9
                                    w-9
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-[var(--color-primary)]/10
                                    text-[var(--color-primary)]
                                "
                            >
                                <FontAwesomeIcon
                                    icon={
                                        isDark
                                            ? faMoon
                                            : faSun
                                    }
                                />
                            </span>

                            <span>
                                {isDark
                                    ? "حالت تاریک"
                                    : "حالت روشن"
                                }
                            </span>

                        </span>


                        {/* =================================================
                            THEME SWITCH
                        ================================================== */}

                        <span
                            className="
                                relative
                                h-7
                                w-14
                                shrink-0
                                rounded-full
                                bg-slate-200
                                transition-colors
                                duration-300
                                dark:bg-[#0f1720]
                            "
                        >

                            {/* Sun */}

                            <span
                                className={`
                                    absolute
                                    top-1/2
                                    right-1
                                    flex
                                    h-5
                                    w-5
                                    -translate-y-1/2
                                    items-center
                                    justify-center
                                    rounded-full
                                    text-[10px]
                                    transition-all
                                    duration-300

                                    ${
                                    isDark
                                        ? "text-slate-500"
                                        : "text-[var(--color-primary)]"
                                }
                                `}
                            >
                                <FontAwesomeIcon
                                    icon={faSun}
                                />
                            </span>


                            {/* Moon */}

                            <span
                                className={`
                                    absolute
                                    top-1/2
                                    left-1
                                    flex
                                    h-5
                                    w-5
                                    -translate-y-1/2
                                    items-center
                                    justify-center
                                    rounded-full
                                    text-[10px]
                                    transition-all
                                    duration-300

                                    ${
                                    isDark
                                        ? "text-[var(--color-primary)]"
                                        : "text-slate-400"
                                }
                                `}
                            >
                                <FontAwesomeIcon
                                    icon={faMoon}
                                />
                            </span>


                            {/* Sliding Circle */}

                            <span
                                className={`
                                    absolute
                                    top-1/2
                                    h-5
                                    w-5
                                    -translate-y-1/2
                                    rounded-full
                                    bg-white
                                    shadow-md
                                    transition-all
                                    duration-300
                                    ease-out

                                    ${
                                    isDark
                                        ? "left-1"
                                        : "right-1"
                                }
                                `}
                            />

                        </span>

                    </button>

                </nav>


                {/* =================================================
                    MOBILE FOOTER / LOGIN
                ================================================== */}

                <div
                    className="
                        shrink-0
                        border-t
                        border-[var(--color-border)]
                        p-4
                    "
                >

                    <Link
                        to="/login"
                        onClick={closeMobileMenu}
                        className="
                            flex
                            min-h-[54px]
                            w-full
                            items-center
                            justify-center
                            gap-3
                            rounded-2xl
                            bg-[var(--color-primary)]
                            px-4
                            text-sm
                            font-bold
                            text-white
                            shadow-lg
                            shadow-[rgba(var(--primary-rgb),0.20)]
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                        "
                    >

                        <FontAwesomeIcon
                            icon={faUser}
                        />

                        <span>
                            ورود | ثبت‌نام
                        </span>

                    </Link>

                </div>

            </aside>
        </>
    );
}


export default Navbar;