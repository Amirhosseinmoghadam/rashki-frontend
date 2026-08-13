import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function GlobalMouseGlow() {
    const glowRef = useRef(null);

    useEffect(() => {
        const glow = glowRef.current;

        if (!glow) return;

        const mediaQuery = window.matchMedia("(pointer: fine)");

        if (!mediaQuery.matches) {
            glow.style.display = "none";
            return;
        }

        const handleMouseMove = (event) => {
            gsap.to(glow, {
                x: event.clientX,
                y: event.clientY,
                duration: 0.25,
                ease: "power3.out",
                overwrite: "auto",
            });
        };

        const handleMouseEnter = () => {
            gsap.to(glow, {
                opacity: 1,
                duration: 0.3,
            });
        };

        const handleMouseLeave = () => {
            gsap.to(glow, {
                opacity: 0,
                duration: 0.3,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        document.addEventListener(
            "mouseenter",
            handleMouseEnter,
            true
        );

        document.addEventListener(
            "mouseleave",
            handleMouseLeave,
            true
        );

        return () => {
            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );

            document.removeEventListener(
                "mouseenter",
                handleMouseEnter,
                true
            );

            document.removeEventListener(
                "mouseleave",
                handleMouseLeave,
                true
            );
        };
    }, []);

    return (
        <div
            ref={glowRef}
            aria-hidden="true"
            className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[9999]
        hidden
        h-[500px]
        w-[500px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        opacity-0
        md:block
      "
            style={{
                background: `
          radial-gradient(
            circle,
            rgba(245, 148, 58, 0.14) 0%,
            rgba(245, 148, 58, 0.08) 20%,
            rgba(245, 148, 58, 0.04) 40%,
            transparent 70%
          )
        `,
                filter: "blur(5px)",
            }}
        />
    );
}

export default GlobalMouseGlow;