import { useState } from "react";

function Dock({
                  items = [],
                  className = "",
              }) {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div
            className={`
        flex
        items-end
        justify-center
        gap-2
        rounded-3xl
        border
        border-white/10
        bg-white/90
        px-3
        py-2
        shadow-2xl
        backdrop-blur-xl
        dark:bg-[#0f1720]/90
        ${className}
      `}
        >
            {items.map((item, index) => {
                const Icon = item.icon;

                return (
                    <div
                        key={item.label}
                        className="relative flex flex-col items-center"
                    >
                        {activeIndex === index && (
                            <span
                                className="
                  absolute
                  -top-10
                  whitespace-nowrap
                  rounded-lg
                  bg-[#0f1720]
                  px-3
                  py-1.5
                  text-xs
                  text-white
                  shadow-lg
                  dark:bg-white
                  dark:text-[#0f1720]
                "
                            >
                {item.label}
              </span>
                        )}

                        <button
                            type="button"
                            aria-label={item.label}
                            onMouseEnter={() => setActiveIndex(index)}
                            onMouseLeave={() => setActiveIndex(null)}
                            onFocus={() => setActiveIndex(index)}
                            onBlur={() => setActiveIndex(null)}
                            onClick={item.onClick}
                            className={`
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                transition-all
                duration-300
                ${
                                item.active
                                    ? "bg-[#f5943a] text-white shadow-lg"
                                    : `
                      text-slate-600
                      hover:-translate-y-2
                      hover:scale-110
                      hover:bg-slate-100
                      hover:text-[#f5943a]
                      dark:text-slate-300
                      dark:hover:bg-white/10
                    `
                            }
              `}
                        >
                            <Icon />
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default Dock;