import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function GlobalMouseGlow() {
    const glowRef = useRef(null);

    useEffect(() => {
        const glow = glowRef.current;

        if (!glow) return;

        // فقط برای دستگاه‌هایی که موس واقعی دارند
        const isFinePointer = window.matchMedia("(pointer: fine)");

        if (!isFinePointer.matches) {
            return;
        }

        const moveGlow = (event) => {
            gsap.to(glow, {
                left: event.clientX,
                top: event.clientY,
                opacity: 1,
                duration: 0.35,
                ease: "power3.out",
                overwrite: true,
            });
        };

        const hideGlow = () => {
            gsap.to(glow, {
                opacity: 0,
                duration: 0.3,
                ease: "power2.out",
            });
        };

        window.addEventListener("mousemove", moveGlow);
        document.addEventListener("mouseleave", hideGlow);

        return () => {
            window.removeEventListener("mousemove", moveGlow);
            document.removeEventListener("mouseleave", hideGlow);
        };
    }, []);

    return (
        <div
            ref={glowRef}
            aria-hidden="true"
            style={{
                position: "fixed",
                left: "50%",
                top: "50%",
                width: "700px",
                height: "700px",
                borderRadius: "50%",
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
                zIndex: 9999,
                opacity: 0,
                background: `
          radial-gradient(
            circle,
            rgba(245, 148, 58, 0.18) 0%,
            rgba(245, 148, 58, 0.1) 20%,
            rgba(245, 148, 58, 0.05) 40%,
            rgba(245, 148, 58, 0.02) 55%,
            transparent 70%
          )
        `,
                filter: "blur(12px)",
                willChange: "left, top, opacity",
            }}
        />
    );
}

export default GlobalMouseGlow;