import { useEffect, useRef, useState } from "react";

/* =========================================================
   SIZE STYLES
========================================================= */

const sizeStyles = {
    sm: {
        height: "40px",
        padding: "0 24px",
        fontSize: "14px",
    },

    md: {
        height: "44px",
        padding: "0 24px",
        fontSize: "14px",
    },


    lg: {
        height: "48px",
        padding: "0 24px",
        fontSize: "14px",
    },

    xl: {
        height: "70px",
        padding: "0 30px",
        fontSize: "16px",
    },
};
/* =========================================================
   VARIANTS
========================================================= */

const variantStyles = {
    primary: {
        background: "var(--color-primary)",
        color: "#ffffff",
        border: "var(--color-primary)",
    },

    secondary: {
        background: "var(--color-surface)",
        color: "var(--color-text-main)",
        border: "var(--color-border)",
    },

    outline: {
        background: "transparent",
        color: "var(--color-text-main)",
        border: "var(--color-border)",
    },

    ghost: {
        background: "transparent",
        color: "var(--color-text-main)",
        border: "transparent",
    },
};

/* =========================================================
   COMPONENT
========================================================= */

const SpecularButton = ({
                            children,

                            size = "md",
                            variant = "primary",

                            radius = 14,

                            tint = "#ffffff",
                            tintOpacity = 0.08,
                            blur = 8,

                            textColor,
                            lineColor,
                            baseColor,

                            intensity = 1,
                            shineSize = 10,
                            shineFade = 40,

                            thickness = 1,
                            speed = 0.35,

                            followMouse = true,
                            proximity = 250,
                            autoAnimate = false,

                            disabled = false,
                            loading = false,

                            className = "",
                            style = {},

                            onClick,
                            type = "button",

                            ...props
                        }) => {
    const buttonRef = useRef(null);

    const [shine, setShine] = useState({
        x: 50,
        y: 50,
        opacity: 0,
    });

    const [autoPosition, setAutoPosition] =
        useState(0);

    /* =====================================================
       SIZE
    ===================================================== */

    const currentSize =
        sizeStyles[size] || sizeStyles.md;

    /* =====================================================
       VARIANT
    ===================================================== */

    const currentVariant =
        variantStyles[variant] ||
        variantStyles.primary;

    /* =====================================================
       AUTO ANIMATION
    ===================================================== */

    useEffect(() => {
        if (!autoAnimate) return;

        let animationFrame;

        const start = performance.now();

        const animate = (time) => {
            const elapsed =
                (time - start) / 1000;

            const position =
                ((elapsed * speed * 100) % 200) -
                50;

            setAutoPosition(position);

            animationFrame =
                requestAnimationFrame(animate);
        };

        animationFrame =
            requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(
                animationFrame
            );
        };
    }, [autoAnimate, speed]);

    /* =====================================================
       MOUSE MOVE
    ===================================================== */

    const handleMouseMove = (event) => {
        if (
            !followMouse ||
            disabled ||
            loading
        ) {
            return;
        }

        const button =
            buttonRef.current;

        if (!button) return;

        const rect =
            button.getBoundingClientRect();

        const mouseX =
            event.clientX - rect.left;

        const mouseY =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const distance =
            Math.sqrt(
                Math.pow(
                    mouseX - centerX,
                    2
                ) +
                Math.pow(
                    mouseY - centerY,
                    2
                )
            );

        if (distance > proximity) {
            setShine((previous) => ({
                ...previous,
                opacity: 0,
            }));

            return;
        }

        setShine({
            x:
                (mouseX / rect.width) *
                100,

            y:
                (mouseY / rect.height) *
                100,

            opacity: intensity,
        });
    };

    /* =====================================================
       MOUSE LEAVE
    ===================================================== */

    const handleMouseLeave = () => {
        if (!autoAnimate) {
            setShine((previous) => ({
                ...previous,
                opacity: 0,
            }));
        }
    };

    /* =====================================================
       COLORS
    ===================================================== */

    const backgroundColor =
        baseColor ||
        currentVariant.background;

    const finalTextColor =
        textColor ||
        currentVariant.color;

    const borderColor =
        lineColor ||
        currentVariant.border;

    /* =====================================================
       SHINE POSITION
    ===================================================== */

    const shineX = autoAnimate
        ? `${autoPosition}%`
        : `${shine.x}%`;

    /* =====================================================
       RENDER
    ===================================================== */

    return (
        <button
            ref={buttonRef}
            type={type}
            disabled={
                disabled || loading
            }
            onClick={onClick}
            onMouseMove={
                handleMouseMove
            }
            onMouseLeave={
                handleMouseLeave
            }
            className={`
                group
                relative
                isolate
                inline-flex
                shrink-0
                items-center
                justify-center
                overflow-hidden
                select-none
                whitespace-nowrap
                font-bold
                tracking-[-0.01em]
                transition-all
                duration-300
                ease-out

                focus:outline-none

                focus-visible:ring-2
                focus-visible:ring-[var(--color-primary)]

                focus-visible:ring-offset-2
                focus-visible:ring-offset-[var(--color-background)]

                active:scale-[0.98]

                disabled:pointer-events-none
                disabled:cursor-not-allowed
                disabled:opacity-50

                ${className}
            `}
            style={{
                /* =================================================
                   SIZE
                ================================================= */

                height:
                currentSize.height,

                minHeight:
                currentSize.height,

                minWidth:
                currentSize.minWidth,

                padding:
                currentSize.padding,

                fontSize:
                currentSize.fontSize,

                /* =================================================
                   BOX MODEL
                ================================================= */

                boxSizing:
                    "border-box",

                /* =================================================
                   COLORS
                ================================================= */

                color:
                finalTextColor,

                background:
                backgroundColor,

                border:
                    `${thickness}px solid ${borderColor}`,

                borderRadius:
                radius,

                /* =================================================
                   CUSTOM STYLE
                ================================================= */

                ...style,
            }}
            {...props}
        >
            {/* =====================================================
                BASE TINT
            ===================================================== */}

            <span
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    -z-10
                    rounded-[inherit]
                "
                style={{
                    background:
                        tintOpacity > 0
                            ? tint
                            : "transparent",

                    opacity:
                    tintOpacity,
                }}
            />

            {/* =====================================================
                SPECULAR SHINE
            ===================================================== */}

            <span
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    -z-[5]
                    rounded-[inherit]
                    transition-opacity
                    duration-200
                "
                style={{
                    opacity:
                    shine.opacity,

                    background: `
                        radial-gradient(
                            ${shineSize * 2}px circle
                            at ${shineX} ${shine.y}%,
                            ${tint},
                            transparent ${shineFade}%
                        )
                    `,

                    filter:
                        blur > 0
                            ? `blur(${blur}px)`
                            : "none",

                    mixBlendMode:
                        "screen",
                }}
            />

            {/* =====================================================
                MOVING HIGHLIGHT
            ===================================================== */}

            <span
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    -z-[4]
                    rounded-[inherit]
                "
                style={{
                    opacity:
                        shine.opacity *
                        0.7,

                    background: `
                        linear-gradient(
                            115deg,
                            transparent 20%,
                            ${lineColor || borderColor}
                            50%,
                            transparent 80%
                        )
                    `,

                    backgroundSize:
                        "200% 100%",

                    backgroundPosition:
                        `${shineX} 0`,

                    filter:
                        `blur(${Math.max(
                            0,
                            blur / 2
                        )}px)`,
                }}
            />

            {/* =====================================================
                BORDER GLOW
            ===================================================== */}

            <span
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    -z-[3]
                    rounded-[inherit]
                "
                style={{
                    border:
                        `${thickness}px solid ${
                            lineColor ||
                            borderColor
                        }`,

                    opacity:
                        shine.opacity *
                        0.45,

                    boxShadow: `
                        0 0 ${
                        8 * intensity
                    }px ${
                        lineColor ||
                        borderColor
                    }
                    `,
                }}
            />

            {/* =====================================================
                CONTENT
            ===================================================== */}

            <span
                className="
                    relative
                    z-10
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    whitespace-nowrap
                "
            >
                {loading ? (
                    <>
                        <span
                            className="
                                h-4
                                w-4
                                animate-spin
                                rounded-full
                                border-2
                                border-current
                                border-t-transparent
                            "
                            aria-hidden="true"
                        />

                        <span>
                            در حال پردازش...
                        </span>
                    </>
                ) : (
                    children
                )}
            </span>
        </button>
    );
};

export default SpecularButton;