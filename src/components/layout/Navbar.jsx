import { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars,
  faMoon,
  faSun,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";



import logo from "../../assets/images/logo.svg";

import { ThemeContext } from "../../context/ThemeContext";


function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "خانه",
      path: "/",
    },
    {
      name: "محصولات",
      path: "/products",
    },
    {
      name: "دسته‌بندی‌ها",
      path: "/categories",
    },
    {
      name: "درباره ما",
      path: "/about",
    },
    {
      name: "تماس با ما",
      path: "/contact",
    },
  ];

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
      <header
          dir="rtl"
          className="
        sticky
        top-0
        z-50
        border-b
        border-border
        bg-background/95
        backdrop-blur-md
        transition-colors
        duration-300
      "
      >
        <div
            className="
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          px-4
          sm:px-6
          lg:px-8
        "
        >
          {/* سمت راست - لوگو */}

          <Link
              to="/"
              onClick={closeMenu}
              className="
            flex
            shrink-0
            items-center
            gap-3
          "
          >
            <img
                src={logo}
                alt="راشکی"
                className="
              h-11
              w-11
              object-contain
            "
            />

            <div className="hidden sm:block">
              <h1
                  className="
                text-xl
                font-black
                text-text-main
              "
              >
                راشکی
              </h1>

              <p
                  className="
                mt-1
                text-xs
                text-text-muted
              "
              >
                لوازم یدکی موتورسیکلت
              </p>
            </div>
          </Link>

          {/* منوی دسکتاپ */}

          <nav
              className="
            hidden
            items-center
            gap-1
            lg:flex
          "
          >
            {navLinks.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                        `
                  relative
                  rounded-xl
                  px-4
                  py-2
                  text-sm
                  font-medium
                  transition-all
                  duration-200

                  ${
                            isActive
                                ? "bg-primary/10 text-primary"
                                : "text-text-muted hover:bg-primary/5 hover:text-primary"
                        }
                `
                    }
                >
                  {item.name}
                </NavLink>
            ))}
          </nav>

          {/* سمت چپ - کنترل‌ها */}

          <div
              className="
            flex
            items-center
            gap-2
          "
          >
            {/* دکمه تغییر تم */}

            <button
                type="button"
                onClick={toggleTheme}
                aria-label="تغییر حالت روشن و تاریک"
                title={
                  darkMode
                      ? "تغییر به حالت روشن"
                      : "تغییر به حالت تاریک"
                }
                className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-border
              bg-surface
              text-text-main
              transition-all
              duration-200
              hover:border-primary
              hover:bg-primary
              hover:text-white
              active:scale-95
            "
            >
              <FontAwesomeIcon
                  icon={
                    darkMode
                        ? faSun
                        : faMoon
                  }
                  className="text-base"
              />
            </button>

            {/* دکمه منوی موبایل */}

            <button
                type="button"
                onClick={() =>
                    setIsMenuOpen((previousState) => !previousState)
                }
                aria-label="باز کردن منو"
                aria-expanded={isMenuOpen}
                className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-border
              bg-surface
              text-text-main
              transition-all
              duration-200
              hover:border-primary
              hover:bg-primary
              hover:text-white
              active:scale-95
              lg:hidden
            "
            >
              <FontAwesomeIcon
                  icon={
                    isMenuOpen
                        ? faTimes
                        : faBars
                  }
                  className="text-lg"
              />
            </button>
          </div>
        </div>

        {/* منوی موبایل */}

        <div
            className={`
          overflow-hidden
          border-t
          border-border
          bg-background
          transition-all
          duration-300
          lg:hidden

          ${
                isMenuOpen
                    ? "max-h-96 opacity-100"
                    : "max-h-0 border-transparent opacity-0"
            }
        `}
        >
          <nav
              className="
            mx-auto
            max-w-7xl
            px-4
            py-4
            sm:px-6
          "
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((item) => (
                  <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                          `
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-medium
                    transition-all
                    duration-200

                    ${
                              isActive
                                  ? "bg-primary/10 text-primary"
                                  : "text-text-muted hover:bg-primary/5 hover:text-primary"
                          }
                  `
                      }
                  >
                    {item.name}
                  </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </header>
  );
}

export default Navbar;