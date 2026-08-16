import {
    useEffect,
    useRef,
    useCallback,
} from "react";

/* =========================================================
   Resolve CSS Color
========================================================= */

function resolveColor(color, element) {
    if (!color) {
        return "rgb(245, 148, 58)";
    }

    if (!color.startsWith("var(")) {
        return color;
    }

    if (!element) {
        return "rgb(245, 148, 58)";
    }

    const variableMatch =
        color.match(
            /var\(\s*(--[\w-]+)\s*(?:,\s*[^)]+)?\)/
        );

    if (!variableMatch) {
        return color;
    }

    const variableName =
        variableMatch[1];

    const computedColor =
        getComputedStyle(element)
            .getPropertyValue(variableName)
            .trim();

    return computedColor || color;
}

/* =========================================================
   Color → RGBA
========================================================= */

function colorToRgba(
    color,
    alpha = 1,
    element = null
) {
    const resolvedColor =
        resolveColor(color, element);

    if (!resolvedColor) {
        return `rgba(245, 148, 58, ${alpha})`;
    }

    /* -----------------------------------------------------
       HEX
    ----------------------------------------------------- */

    if (resolvedColor.startsWith("#")) {
        let hex =
            resolvedColor
                .replace("#", "")
                .trim();

        if (hex.length === 3) {
            hex = hex
                .split("")
                .map((char) => char + char)
                .join("");
        }

        if (
            hex.length === 6 ||
            hex.length === 8
        ) {
            const int = parseInt(
                hex.slice(0, 6),
                16
            );

            if (!Number.isNaN(int)) {
                const r =
                    (int >> 16) & 255;

                const g =
                    (int >> 8) & 255;

                const b =
                    int & 255;

                return `rgba(${r}, ${g}, ${b}, ${alpha})`;
            }
        }
    }

    /* -----------------------------------------------------
       RGB / RGBA
    ----------------------------------------------------- */

    const rgbMatch =
        resolvedColor.match(
            /^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*[\d.]+)?\s*\)$/i
        );

    if (rgbMatch) {
        const r = rgbMatch[1];
        const g = rgbMatch[2];
        const b = rgbMatch[3];

        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    /* -----------------------------------------------------
       Browser fallback

       This allows colors such as:

       white
       currentColor
       hsl(...)
       color(...)
    ----------------------------------------------------- */

    if (typeof document !== "undefined") {
        const temp =
            document.createElement("span");

        temp.style.color = resolvedColor;
        temp.style.position = "absolute";
        temp.style.visibility = "hidden";

        document.body.appendChild(temp);

        const computed =
            getComputedStyle(temp).color;

        temp.remove();

        const computedRgb =
            computed.match(
                /^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*[\d.]+)?\s*\)$/i
            );

        if (computedRgb) {
            return `rgba(
                ${computedRgb[1]},
                ${computedRgb[2]},
                ${computedRgb[3]},
                ${alpha}
            )`.replace(/\s+/g, " ");
        }
    }

    return resolvedColor;
}

/* =========================================================
   Component
========================================================= */

const ElectricBorder = ({
                            children,

                            color = "var(--color-primary)",

                            speed = 1,
                            chaos = 0.12,

                            borderRadius = 24,
                            thickness = 1,

                            className = "",
                            style = {},
                        }) => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const animationRef = useRef(null);

    const timeRef = useRef(0);
    const lastFrameTimeRef =
        useRef(0);

    /* =====================================================
       Random
    ===================================================== */

    const random = useCallback((x) => {
        return (
            (Math.sin(
                    x * 12.9898
                ) *
                43758.5453) %
            1
        );
    }, []);

    /* =====================================================
       Noise
    ===================================================== */

    const noise2D = useCallback(
        (x, y) => {
            const i = Math.floor(x);
            const j = Math.floor(y);

            const fx = x - i;
            const fy = y - j;

            const a =
                random(i + j * 57);

            const b =
                random(
                    i + 1 + j * 57
                );

            const c =
                random(
                    i + (j + 1) * 57
                );

            const d =
                random(
                    i +
                    1 +
                    (j + 1) * 57
                );

            const ux =
                fx * fx * (3 - 2 * fx);

            const uy =
                fy * fy * (3 - 2 * fy);

            return (
                a * (1 - ux) * (1 - uy) +
                b * ux * (1 - uy) +
                c * (1 - ux) * uy +
                d * ux * uy
            );
        },
        [random]
    );

    /* =====================================================
       Octaved Noise
    ===================================================== */

    const octavedNoise = useCallback(
        (
            x,
            octaves,
            lacunarity,
            gain,
            baseAmplitude,
            baseFrequency,
            time,
            seed,
            baseFlatness
        ) => {
            let value = 0;

            let amplitude =
                baseAmplitude;

            let frequency =
                baseFrequency;

            for (
                let i = 0;
                i < octaves;
                i++
            ) {
                let octaveAmplitude =
                    amplitude;

                if (i === 0) {
                    octaveAmplitude *=
                        baseFlatness;
                }

                value +=
                    octaveAmplitude *
                    noise2D(
                        frequency *
                        x +
                        seed *
                        100,

                        time *
                        frequency *
                        0.3
                    );

                frequency *=
                    lacunarity;

                amplitude *= gain;
            }

            return value;
        },
        [noise2D]
    );

    /* =====================================================
       Corner Point
    ===================================================== */

    const getCornerPoint =
        useCallback(
            (
                centerX,
                centerY,
                radius,
                startAngle,
                arcLength,
                progress
            ) => {
                const angle =
                    startAngle +
                    progress *
                    arcLength;

                return {
                    x:
                        centerX +
                        radius *
                        Math.cos(
                            angle
                        ),

                    y:
                        centerY +
                        radius *
                        Math.sin(
                            angle
                        ),
                };
            },
            []
        );

    /* =====================================================
       Rounded Rectangle Point
    ===================================================== */

    const getRoundedRectPoint =
        useCallback(
            (
                t,
                left,
                top,
                width,
                height,
                radius
            ) => {
                const straightWidth =
                    width -
                    2 * radius;

                const straightHeight =
                    height -
                    2 * radius;

                const cornerArc =
                    (Math.PI *
                        radius) /
                    2;

                const totalPerimeter =
                    2 *
                    straightWidth +
                    2 *
                    straightHeight +
                    4 * cornerArc;

                const distance =
                    t *
                    totalPerimeter;

                let accumulated = 0;

                /* Top */

                if (
                    distance <=
                    accumulated +
                    straightWidth
                ) {
                    const progress =
                        (distance -
                            accumulated) /
                        straightWidth;

                    return {
                        x:
                            left +
                            radius +
                            progress *
                            straightWidth,

                        y: top,
                    };
                }

                accumulated +=
                    straightWidth;

                /* Top Right */

                if (
                    distance <=
                    accumulated +
                    cornerArc
                ) {
                    const progress =
                        (distance -
                            accumulated) /
                        cornerArc;

                    return getCornerPoint(
                        left +
                        width -
                        radius,

                        top + radius,

                        radius,

                        -Math.PI / 2,

                        Math.PI / 2,

                        progress
                    );
                }

                accumulated +=
                    cornerArc;

                /* Right */

                if (
                    distance <=
                    accumulated +
                    straightHeight
                ) {
                    const progress =
                        (distance -
                            accumulated) /
                        straightHeight;

                    return {
                        x:
                            left +
                            width,

                        y:
                            top +
                            radius +
                            progress *
                            straightHeight,
                    };
                }

                accumulated +=
                    straightHeight;

                /* Bottom Right */

                if (
                    distance <=
                    accumulated +
                    cornerArc
                ) {
                    const progress =
                        (distance -
                            accumulated) /
                        cornerArc;

                    return getCornerPoint(
                        left +
                        width -
                        radius,

                        top +
                        height -
                        radius,

                        radius,

                        0,

                        Math.PI / 2,

                        progress
                    );
                }

                accumulated +=
                    cornerArc;

                /* Bottom */

                if (
                    distance <=
                    accumulated +
                    straightWidth
                ) {
                    const progress =
                        (distance -
                            accumulated) /
                        straightWidth;

                    return {
                        x:
                            left +
                            width -
                            radius -
                            progress *
                            straightWidth,

                        y:
                            top +
                            height,
                    };
                }

                accumulated +=
                    straightWidth;

                /* Bottom Left */

                if (
                    distance <=
                    accumulated +
                    cornerArc
                ) {
                    const progress =
                        (distance -
                            accumulated) /
                        cornerArc;

                    return getCornerPoint(
                        left + radius,

                        top +
                        height -
                        radius,

                        radius,

                        Math.PI / 2,

                        Math.PI / 2,

                        progress
                    );
                }

                accumulated +=
                    cornerArc;

                /* Left */

                if (
                    distance <=
                    accumulated +
                    straightHeight
                ) {
                    const progress =
                        (distance -
                            accumulated) /
                        straightHeight;

                    return {
                        x: left,

                        y:
                            top +
                            height -
                            radius -
                            progress *
                            straightHeight,
                    };
                }

                accumulated +=
                    straightHeight;

                /* Top Left */

                const progress =
                    (distance -
                        accumulated) /
                    cornerArc;

                return getCornerPoint(
                    left + radius,

                    top + radius,

                    radius,

                    Math.PI,

                    Math.PI / 2,

                    progress
                );
            },
            [getCornerPoint]
        );

    /* =====================================================
       Animation
    ===================================================== */

    useEffect(() => {
        const canvas =
            canvasRef.current;

        const container =
            containerRef.current;

        if (!canvas || !container) {
            return;
        }

        const ctx =
            canvas.getContext("2d");

        if (!ctx) return;

        const octaves = 10;
        const lacunarity = 1.6;
        const gain = 0.7;

        const amplitude = chaos;
        const frequency = 10;

        const baseFlatness = 0;

        const displacement = 60;
        const borderOffset = 60;

        let width = 0;
        let height = 0;

        let dpr = Math.min(
            window.devicePixelRatio || 1,
            2
        );

        /* =================================================
           Size
        ================================================= */

        const updateSize = () => {
            const rect =
                container.getBoundingClientRect();

            width =
                rect.width +
                borderOffset * 2;

            height =
                rect.height +
                borderOffset * 2;

            dpr = Math.min(
                window.devicePixelRatio || 1,
                2
            );

            canvas.width =
                width * dpr;

            canvas.height =
                height * dpr;

            canvas.style.width =
                `${width}px`;

            canvas.style.height =
                `${height}px`;
        };

        updateSize();

        /* =================================================
           Draw
        ================================================= */

        const draw = (currentTime) => {
            const currentDpr =
                Math.min(
                    window.devicePixelRatio ||
                    1,
                    2
                );

            if (
                currentDpr !== dpr
            ) {
                updateSize();
            }

            if (
                lastFrameTimeRef.current ===
                0
            ) {
                lastFrameTimeRef.current =
                    currentTime;
            }

            const deltaTime =
                (currentTime -
                    lastFrameTimeRef.current) /
                1000;

            timeRef.current +=
                deltaTime * speed;

            lastFrameTimeRef.current =
                currentTime;

            ctx.setTransform(
                1,
                0,
                0,
                1,
                0,
                0
            );

            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );

            ctx.scale(dpr, dpr);

            /* ---------------------------------------------
               Resolve current theme color

               Important:
               This runs every frame so if the theme
               changes, the canvas immediately follows it.
            --------------------------------------------- */

            const computedColor =
                resolveColor(
                    color,
                    container
                );

            ctx.strokeStyle =
                computedColor;

            ctx.lineWidth =
                thickness;

            ctx.lineCap = "round";
            ctx.lineJoin = "round";

            const left =
                borderOffset;

            const top =
                borderOffset;

            const borderWidth =
                width -
                borderOffset * 2;

            const borderHeight =
                height -
                borderOffset * 2;

            const maxRadius =
                Math.min(
                    borderWidth,
                    borderHeight
                ) / 2;

            const radius =
                Math.min(
                    borderRadius,
                    maxRadius
                );

            const approximatePerimeter =
                2 *
                (borderWidth +
                    borderHeight) +
                2 *
                Math.PI *
                radius;

            const sampleCount =
                Math.max(
                    100,
                    Math.floor(
                        approximatePerimeter /
                        2
                    )
                );

            ctx.beginPath();

            for (
                let i = 0;
                i <= sampleCount;
                i++
            ) {
                const progress =
                    i /
                    sampleCount;

                const point =
                    getRoundedRectPoint(
                        progress,
                        left,
                        top,
                        borderWidth,
                        borderHeight,
                        radius
                    );

                const xNoise =
                    octavedNoise(
                        progress * 8,
                        octaves,
                        lacunarity,
                        gain,
                        amplitude,
                        frequency,
                        timeRef.current,
                        0,
                        baseFlatness
                    );

                const yNoise =
                    octavedNoise(
                        progress * 8,
                        octaves,
                        lacunarity,
                        gain,
                        amplitude,
                        frequency,
                        timeRef.current,
                        1,
                        baseFlatness
                    );

                const x =
                    point.x +
                    xNoise *
                    displacement;

                const y =
                    point.y +
                    yNoise *
                    displacement;

                if (i === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }

            ctx.closePath();
            ctx.stroke();

            animationRef.current =
                requestAnimationFrame(
                    draw
                );
        };

        /* =================================================
           Resize Observer
        ================================================= */

        const resizeObserver =
            new ResizeObserver(() => {
                updateSize();
            });

        resizeObserver.observe(
            container
        );

        animationRef.current =
            requestAnimationFrame(
                draw
            );

        /* =================================================
           Cleanup
        ================================================= */

        return () => {
            if (
                animationRef.current
            ) {
                cancelAnimationFrame(
                    animationRef.current
                );
            }

            resizeObserver.disconnect();
        };
    }, [
        color,
        speed,
        chaos,
        borderRadius,
        thickness,
        octavedNoise,
        getRoundedRectPoint,
    ]);

    /* =====================================================
       Render
    ===================================================== */

    return (
        <div
            ref={containerRef}
            className={`
                relative
                isolate
                overflow-visible
                ${className}
            `}
            style={{
                "--electric-border-color":
                color,

                borderRadius,

                ...style,
            }}
        >
            {/* Animated Canvas */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    z-[2]
                    -translate-x-1/2
                    -translate-y-1/2
                "
            >
                <canvas
                    ref={canvasRef}
                    className="block"
                />
            </div>

            {/* Glow */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-0
                    rounded-[inherit]
                "
            >
                {/* Soft border */}

                <div
                    className="
                        absolute
                        inset-0
                        rounded-[inherit]
                    "
                    style={{
                        border:
                            `2px solid ${colorToRgba(
                                color,
                                0.6,
                                containerRef.current
                            )}`,

                        filter:
                            "blur(1px)",
                    }}
                />

                {/* Strong border */}

                <div
                    className="
                        absolute
                        inset-0
                        rounded-[inherit]
                    "
                    style={{
                        border:
                            `2px solid ${color}`,

                        filter:
                            "blur(4px)",
                    }}
                />

                {/* Outer glow */}

                <div
                    className="
                        absolute
                        inset-0
                        -z-[1]
                        scale-110
                        rounded-[inherit]
                        opacity-30
                    "
                    style={{
                        filter:
                            "blur(32px)",

                        background:
                            `
                            linear-gradient(
                                -30deg,
                                var(--electric-border-color),
                                transparent,
                                var(--electric-border-color)
                            )
                            `,
                    }}
                />
            </div>

            {/* Content */}

            <div
                className="
                    relative
                    z-[1]
                    rounded-[inherit]
                "
            >
                {children}
            </div>
        </div>
    );
};

export default ElectricBorder;