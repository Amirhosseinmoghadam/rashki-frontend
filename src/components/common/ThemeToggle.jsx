import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMoon,
    faSun,
} from "@fortawesome/free-solid-svg-icons";

function ThemeToggle() {
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label="تغییر تم"
            className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        border
        border-slate-200
        bg-slate-50
        text-slate-700
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-[#f5943a]
        hover:text-[#f5943a]
        dark:border-slate-700
        dark:bg-[#16212b]
        dark:text-slate-200
        dark:hover:border-[#f5943a]
        dark:hover:text-[#f5943a]
      "
        >
            <FontAwesomeIcon
                icon={darkMode ? faSun : faMoon}
                className="text-lg"
            />
        </button>
    );
}

export default ThemeToggle;