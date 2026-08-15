import { useEffect, useRef, useState } from "react";

const sizeStyles = {
    sm: {
        height: "36px",
        padding: "0 14px",
        fontSize: "13px",
    },
    md: {
        height: "42px",
        padding: "0 18px",
        fontSize: "14px",
    },
    lg: {
        height: "50px",
        padding: "0 24px",
        fontSize: "15px",
    },
    xl: {
        height: "58px",
        padding: "0 30px",
        fontSize: "16px",
    },
};

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

const SpecularButton = ({
                            children,
                            size = "md",
                            variant = "primary",
                            radius = 14,
                            tint = "#ffffff",
                            tintOpacity = 0.08,
                            blur = 8,
                            textColor,
                            lineColor = "#ffffff",
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

    const currentSize =
        sizeStyles[size] || sizeStyles.md;

    const currentVariant =
        variantStyles[variant] ||
        variantStyles.primary;

    useEffect(() => {
        if (!autoAnimate) return;

        let animationFrame;
        let start = performance.now();

        const animate = (time) => {
            const elapsed = (time - start) / 1000;

            const position =
                ((elapsed * speed * 100) % 200) - 50;

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

    const handleMouseMove = (event) => {
        if (!followMouse || disabled) return;

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

        const distance = Math.sqrt(
            Math.pow(mouseX - centerX, 2) +
            Math.pow(mouseY - centerY, 2)
        );

        if (distance > proximity) {
            setShine((previous) => ({
                ...previous,
                opacity: 0,
            }));

            return;
        }

        setShine({
            x: (mouseX / rect.width) * 100,
            y: (mouseY / rect.height) * 100,
            opacity: intensity,
        });
    };

    const handleMouseLeave = () => {
        if (!autoAnimate) {
            setShine((previous) => ({
                ...previous,
                opacity: 0,
            }));
        }
    };

    const backgroundColor =
        baseColor ||
        currentVariant.background;

    const finalTextColor =
        textColor ||
        currentVariant.color;

    const borderColor =
        currentVariant.border;

    const shineX = autoAnimate
        ? `${autoPosition}%`
        : `${shine.x}%`;

    return (
        <button
            ref={buttonRef}
            type={type}
            disabled={disabled || loading}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`
        group
        relative
        isolate
        inline-flex
        items-center
        justify-center
        overflow-hidden
        select-none
        whitespace-nowrap
        font-medium
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
                height: currentSize.height,
                padding: currentSize.padding,
                fontSize: currentSize.fontSize,
                borderRadius: radius,
                color: finalTextColor,
                background: backgroundColor,
                border: `${thickness}px solid ${borderColor}`,
                ...style,
            }}
            {...props}
        >
            {/* Base glass/tint layer */}
            <span
                className="pointer-events-none absolute inset-0 -z-10 rounded-[inherit]"
                style={{
                    background:
                        tintOpacity > 0
                            ? tint
                            : "transparent",
                    opacity: tintOpacity,
                }}
            />

            {/* Specular shine */}
            <span
                className="pointer-events-none absolute inset-0 -z-[5] rounded-[inherit] transition-opacity duration-200"
                style={{
                    opacity: shine.opacity,
                    background: `
            radial-gradient(
              ${shineSize * 2}px circle at ${shineX} ${shine.y}%,
              ${tint},
              transparent ${shineFade}%
            )
          `,
                    filter:
                        blur > 0
                            ? `blur(${blur}px)`
                            : "none",
                    mixBlendMode: "screen",
                }}
            />

            {/* Moving highlight */}
            <span
                className="pointer-events-none absolute inset-0 -z-[4] rounded-[inherit]"
                style={{
                    opacity:
                        shine.opacity * 0.7,
                    background: `
            linear-gradient(
              115deg,
              transparent 20%,
              ${lineColor} 50%,
              transparent 80%
            )
          `,
                    backgroundSize: "200% 100%",
                    backgroundPosition: `${shineX} 0`,
                    filter: `blur(${Math.max(
                        0,
                        blur / 2
                    )}px)`,
                }}
            />

            {/* Border glow */}
            <span
                className="pointer-events-none absolute inset-0 -z-[3] rounded-[inherit]"
                style={{
                    border: `${thickness}px solid ${lineColor}`,
                    opacity:
                        shine.opacity * 0.45,
                    boxShadow: `
            0 0 ${
                        8 * intensity
                    }px ${lineColor}
          `,
                }}
            />

            {/* Content */}
            <span className="relative z-10 inline-flex items-center justify-center gap-2">
        {loading ? (
            <>
            <span
                className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
                aria-hidden="true"
            />
                <span>در حال پردازش...</span>
            </>
        ) : (
            children
        )}
      </span>
        </button>
    );
};

export default SpecularButton;