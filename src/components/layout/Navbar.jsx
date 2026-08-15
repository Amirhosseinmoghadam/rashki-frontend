import {
  useContext,
  useState,
} from "react";

import {
  NavLink,
  useNavigate,
} from "react-router-dom";

import { ThemeContext } from "../../context/ThemeContext";

import ThemeToggle from "../common/ThemeToggle";
import MobileDock from "./MobileDock";

import logo from "../../assets/images/logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars,
  faCartShopping,
  faChevronDown,
  faMagnifyingGlass,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";


function Navbar() {
  const navigate = useNavigate();

  const { darkMode } = useContext(ThemeContext);

  const [mobileMenuOpen, setMobileMenuOpen] =
      useState(false);

  const [searchOpen, setSearchOpen] =
      useState(false);

  const [searchValue, setSearchValue] =
      useState("");


  const navItems = [
    {
      title: "خانه",
      path: "/",
    },

    {
      title: "محصولات",
      path: "/products",
    },

    {
      title: "دسته‌بندی‌ها",
      path: "/categories",
    },

    {
      title: "برندها",
      path: "/brands",
    },

    {
      title: "درباره ما",
      path: "/about",
    },

    {
      title: "تماس با ما",
      path: "/contact",
    },
  ];


  const handleSearch = (event) => {
    event.preventDefault();

    const query = searchValue.trim();

    if (!query) {
      return;
    }

    navigate(
        `/products?search=${encodeURIComponent(query)}`
    );

    setSearchOpen(false);
    setSearchValue("");
  };


  return (
      <>
        <header
            className="
          sticky
          top-0
          z-50
          w-full
          border-b
          border-slate-200
          bg-white/90
          backdrop-blur-xl
          dark:border-white/10
          dark:bg-[#0f1720]/90
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
          >

            {/* ================= LOGO ================= */}

            <NavLink
                to="/"
                className="
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
                dark:bg-[#f5943a]
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
                  text-[#0f1720]
                  dark:text-white
                "
                >
                  راشکی
                </h1>

                <span
                    className="
                  text-xs
                  text-slate-500
                  dark:text-slate-400
                "
                >
                لوازم یدکی موتورسیکلت
              </span>
              </div>
            </NavLink>


            {/* ================= DESKTOP NAV ================= */}

            <nav
                className="
              hidden
              items-center
              gap-1
              lg:flex
            "
            >
              {navItems.map((item) => (
                  <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                          `
                    relative
                    rounded-xl
                    px-4
                    py-2.5
                    text-sm
                    font-bold
                    transition-all
                    duration-300
                    ${
                              isActive
                                  ? `
                          bg-[#f5943a]/10
                          text-[#f5943a]
                        `
                                  : `
                          text-slate-600
                          hover:bg-slate-100
                          hover:text-[#f5943a]
                          dark:text-slate-300
                          dark:hover:bg-white/5
                          dark:hover:text-[#f5943a]
                        `
                          }
                  `
                      }
                  >
                    {item.title}
                  </NavLink>
              ))}
            </nav>


            {/* ================= ACTIONS ================= */}

            <div
                className="
              flex
              items-center
              gap-2
            "
            >

              {/* Search */}

              <button
                  type="button"
                  onClick={() => setSearchOpen(true)}
                  aria-label="جستجو"
                  className="
                hidden
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-slate-200
                text-slate-700
                transition-all
                hover:border-[#f5943a]
                hover:text-[#f5943a]
                dark:border-slate-700
                dark:text-slate-200
                dark:hover:border-[#f5943a]
                dark:hover:text-[#f5943a]
                sm:flex
              "
              >
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                />
              </button>


              {/* Cart */}

              <NavLink
                  to="/cart"
                  aria-label="سبد خرید"
                  className="
                relative
                hidden
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-slate-200
                text-slate-700
                transition-all
                hover:border-[#f5943a]
                hover:text-[#f5943a]
                dark:border-slate-700
                dark:text-slate-200
                dark:hover:border-[#f5943a]
                dark:hover:text-[#f5943a]
                sm:flex
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
                  bg-[#f5943a]
                  px-1
                  text-[10px]
                  font-bold
                  text-white
                "
                >
                0
              </span>
              </NavLink>


              {/* Theme */}

              <div className="hidden sm:block">
                <ThemeToggle />
              </div>


               {/*Login */}

              <NavLink
                  to="/login"
                  className="
                hidden
                items-center
                gap-2
                rounded-xl
                bg-[#f5943a]
                px-4
                py-3
                text-sm
                font-bold
                text-white
                shadow-lg
                shadow-[#f5943a]/20
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-xl
                lg:flex
              "
              >
                <FontAwesomeIcon
                    icon={faUser}
                />

                <span>
                ورود | ثبت‌نام
              </span>
              </NavLink>


              {/* Mobile Menu */}

              <button
                  type="button"
                  onClick={() =>
                      setMobileMenuOpen(true)
                  }
                  aria-label="باز کردن منو"
                  className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-slate-200
                text-slate-700
                dark:border-slate-700
                dark:text-slate-200
                lg:hidden
              "
              >
                <FontAwesomeIcon
                    icon={faBars}
                />
              </button>

            </div>

          </div>
        </header>


        {/* ================= SEARCH MODAL ================= */}

        {searchOpen && (
            <div
                className="
            fixed
            inset-0
            z-[200]
            flex
            items-start
            justify-center
            bg-black/50
            px-4
            pt-24
            backdrop-blur-sm
          "
            >
              <div
                  className="
              w-full
              max-w-2xl
              rounded-3xl
              bg-white
              p-5
              shadow-2xl
              dark:bg-[#16212b]
            "
              >

                <div
                    className="
                mb-4
                flex
                items-center
                justify-between
              "
                >
                  <h2
                      className="
                  text-lg
                  font-black
                  text-[#0f1720]
                  dark:text-white
                "
                  >
                    جستجو در راشکی
                  </h2>

                  <button
                      type="button"
                      onClick={() =>
                          setSearchOpen(false)
                      }
                      className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  hover:bg-slate-100
                  dark:hover:bg-white/10
                "
                  >
                    <FontAwesomeIcon
                        icon={faXmark}
                    />
                  </button>
                </div>


                <form
                    onSubmit={handleSearch}
                    className="
                flex
                gap-2
              "
                >
                  <input
                      type="text"
                      value={searchValue}
                      onChange={(event) =>
                          setSearchValue(
                              event.target.value
                          )
                      }
                      autoFocus
                      placeholder="نام قطعه، برند یا مدل موتورسیکلت..."
                      className="
                  min-w-0
                  flex-1
                  rounded-xl
                  border
                  border-slate-200
                  bg-slate-50
                  px-4
                  py-3
                  text-sm
                  outline-none
                  transition
                  focus:border-[#f5943a]
                  focus:ring-4
                  focus:ring-[#f5943a]/10
                  dark:border-slate-700
                  dark:bg-[#0f1720]
                  dark:text-white
                "
                  />

                  <button
                      type="submit"
                      className="
                  rounded-xl
                  bg-[#f5943a]
                  px-5
                  text-white
                  transition
                  hover:opacity-90
                "
                  >
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                    />
                  </button>
                </form>

              </div>
            </div>
        )}


        {/* ================= MOBILE MENU ================= */}

        {mobileMenuOpen && (
            <div
                className="
            fixed
            inset-0
            z-[150]
            bg-black/50
            backdrop-blur-sm
            lg:hidden
          "
            >
              <aside
                  className="
              absolute
              right-0
              top-0
              h-full
              w-[85%]
              max-w-sm
              bg-white
              p-6
              shadow-2xl
              dark:bg-[#0f1720]
            "
              >

                {/* Header */}

                <div
                    className="
                mb-8
                flex
                items-center
                justify-between
              "
                >
                  <div
                      className="
                  flex
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
                    rounded-xl
                    bg-[#0f1720]
                    p-2
                  "
                    />

                    <div>
                      <h2
                          className="
                      font-black
                      text-[#0f1720]
                      dark:text-white
                    "
                      >
                        راشکی
                      </h2>

                      <p
                          className="
                      text-xs
                      text-slate-500
                    "
                      >
                        فروشگاه لوازم یدکی
                      </p>
                    </div>
                  </div>


                  <button
                      type="button"
                      onClick={() =>
                          setMobileMenuOpen(false)
                      }
                      className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  hover:bg-slate-100
                  dark:hover:bg-white/10
                "
                  >
                    <FontAwesomeIcon
                        icon={faXmark}
                    />
                  </button>
                </div>


                {/* User */}

                <NavLink
                    to="/login"
                    onClick={() =>
                        setMobileMenuOpen(false)
                    }
                    className="
                mb-6
                flex
                items-center
                gap-3
                rounded-2xl
                bg-[#f5943a]/10
                p-4
                text-[#f5943a]
              "
                >
                  <div
                      className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#f5943a]
                  text-white
                "
                  >
                    <FontAwesomeIcon
                        icon={faUser}
                    />
                  </div>

                  <div>
                    <p className="font-bold">
                      ورود یا ثبت‌نام
                    </p>

                    <span className="text-xs">
                  حساب کاربری خود را مدیریت کنید
                </span>
                  </div>
                </NavLink>


                {/* Mobile Navigation */}

                <nav className="space-y-2">
                  {navItems.map((item) => (
                      <NavLink
                          key={item.path}
                          to={item.path}
                          onClick={() =>
                              setMobileMenuOpen(false)
                          }
                          className={({ isActive }) =>
                              `
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      px-4
                      py-3.5
                      font-bold
                      transition
                      ${
                                  isActive
                                      ? `
                            bg-[#f5943a]
                            text-white
                          `
                                      : `
                            text-slate-700
                            hover:bg-slate-100
                            dark:text-slate-200
                            dark:hover:bg-white/5
                          `
                              }
                    `
                          }
                      >
                        {item.title}

                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className="
                      rotate-90
                      text-xs
                    "
                        />
                      </NavLink>
                  ))}
                </nav>


                {/* Theme */}

                <div
                    className="
                absolute
                bottom-8
                left-6
                right-6
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-slate-200
                p-3
                dark:border-slate-700
              "
                >
              <span
                  className="
                  text-sm
                  font-bold
                  text-slate-600
                  dark:text-slate-300
                "
              >
                {darkMode
                    ? "حالت تاریک"
                    : "حالت روشن"}
              </span>

                  <ThemeToggle />
                </div>

              </aside>
            </div>
        )}


        {/* ================= MOBILE DOCK ================= */}

        <MobileDock
            onMenuClick={() =>
                setMobileMenuOpen(true)
            }
            onSearchClick={() =>
                setSearchOpen(true)
            }
        />
      </>
  );
}

export default Navbar;