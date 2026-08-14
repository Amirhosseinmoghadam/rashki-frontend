import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import image1 from "../../../assets/images/home/1.png";
import image2 from "../../../assets/images/home/2.png";
import image3 from "../../../assets/images/home/3.png";
import image4 from "../../../assets/images/home/4.png";
import image5 from "../../../assets/images/home/5.png";
import image6 from "../../../assets/images/home/6.png";
import image7 from "../../../assets/images/home/7.png";
import image8 from "../../../assets/images/home/8.png";
import image9 from "../../../assets/images/home/9.png";

gsap.registerPlugin(ScrollTrigger);

const NAVBAR_HEIGHT = 76;

const slides = [
    {
        image: image1,
        number: "01",
        category: "CONTROL SYSTEM",
        title: "فرمان و کنترل",
        description:
            "دسته‌ها، اهرم‌ها و قطعات سیستم کنترل برای تجربه‌ای دقیق و مطمئن.",
    },
    {
        image: image2,
        number: "02",
        category: "BRAKE SYSTEM",
        title: "سیستم ترمز",
        description:
            "لنت، دیسک و قطعات ترمز باکیفیت برای کنترل بهتر و ایمنی بیشتر.",
    },
    {
        image: image3,
        number: "03",
        category: "ENGINE",
        title: "قطعات موتور",
        description:
            "قطعات اصلی موتور برای عملکرد قدرتمند، روان و مطمئن موتورسیکلت.",
    },
    {
        image: image4,
        number: "04",
        category: "TRANSMISSION",
        title: "انتقال قدرت",
        description:
            "زنجیر، دنده و کلاچ برای انتقال قدرت دقیق و عملکرد بهتر.",
    },
    {
        image: image5,
        number: "05",
        category: "FUEL SYSTEM",
        title: "سیستم سوخت",
        description:
            "قطعات سیستم سوخت‌رسانی برای احتراق بهتر و عملکرد بهینه موتور.",
    },
    {
        image: image6,
        number: "06",
        category: "SUSPENSION",
        title: "سیستم تعلیق",
        description:
            "کمک‌فنر، دوشاخ و قطعات تعلیق برای سواری نرم و کنترل بهتر.",
    },
    {
        image: image7,
        number: "07",
        category: "ELECTRICAL",
        title: "قطعات برقی",
        description:
            "باتری، CDI و قطعات الکتریکی مورد نیاز موتورسیکلت.",
    },
    {
        image: image8,
        number: "08",
        category: "CONSUMABLES",
        title: "لوازم مصرفی",
        description:
            "روغن، فیلتر، شمع و سایر قطعات مصرفی موتورسیکلت.",
    },
    {
        image: image9,
        number: "09",
        category: "MOTORCYCLE PARTS",
        title: "فروشگاه لوازم یدکی",
        description:
            "تمام قطعات مورد نیاز موتورسیکلت را با کیفیت بالا و قیمت مناسب تهیه کنید.",
        final: true,
    },
];

function Hero() {
    const sectionRef = useRef(null);
    const pinRef = useRef(null);

    const slidesRef = useRef([]);
    const progressRef = useRef([]);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const pin = pinRef.current;

        if (!section || !pin) {
            return undefined;
        }

        const ctx = gsap.context(() => {
            const slideElements = slidesRef.current.filter(Boolean);
            const progressElements =
                progressRef.current.filter(Boolean);

            if (
                slideElements.length !== slides.length ||
                progressElements.length !== slides.length
            ) {
                return;
            }

            /*
             * =========================================
             * INITIAL STATE
             * =========================================
             */

            gsap.set(slideElements, {
                autoAlpha: 0,
                scale: 1.035,
                zIndex: 0,
            });

            gsap.set(slideElements[0], {
                autoAlpha: 1,
                scale: 1,
                zIndex: 2,
            });

            gsap.set(progressElements, {
                opacity: 0.35,
                scale: 1,
            });

            gsap.set(progressElements[0], {
                opacity: 1,
                scale: 1.12,
            });

            /*
             * =========================================
             * TIMELINE
             * =========================================
             */

            const timeline = gsap.timeline({
                defaults: {
                    ease: "power2.inOut",
                },
            });

            /*
             * Label مربوط به Slide 01
             */

            timeline.addLabel("slide-0", 0);

            /*
             * هر اسلاید یک واحد کامل دارد.
             */

            for (let index = 1; index < slides.length; index++) {
                const previous = slideElements[index - 1];
                const current = slideElements[index];

                const previousProgress =
                    progressElements[index - 1];

                const currentProgress =
                    progressElements[index];

                const label = `slide-${index}`;

                /*
                 * فاصله بین دو اسلاید
                 */

                timeline.addLabel(label);

                /*
                 * خروج تصویر قبلی
                 */

                timeline.to(
                    previous,
                    {
                        autoAlpha: 0,
                        scale: 1.045,
                        duration: 0.45,
                    },
                    label
                );

                /*
                 * ورود تصویر جدید
                 */

                timeline.fromTo(
                    current,
                    {
                        autoAlpha: 0,
                        scale: 1.045,
                        zIndex: 0,
                    },
                    {
                        autoAlpha: 1,
                        scale: 1,
                        zIndex: 2,
                        duration: 0.55,
                    },
                    label
                );

                /*
                 * Progress قبلی
                 */

                timeline.to(
                    previousProgress,
                    {
                        opacity: 0.35,
                        scale: 1,
                        duration: 0.25,
                    },
                    label
                );

                /*
                 * Progress فعلی
                 */

                timeline.to(
                    currentProgress,
                    {
                        opacity: 1,
                        scale: 1.12,
                        duration: 0.25,
                    },
                    label
                );
            }

            /*
             * =========================================
             * SCROLL TRIGGER
             * =========================================
             *
             * Wrapper فضای لازم برای 9 اسلاید را دارد.
             *
             * خود pin فقط viewport را اشغال می‌کند.
             *
             * بنابراین بعد از اسلاید 09:
             *
             * HERO → FOOTER
             *
             * بدون فضای سفید اضافه.
             */

            const scrollTrigger = ScrollTrigger.create({
                animation: timeline,

                trigger: section,

                pin: pin,

                pinSpacing: false,

                start: `top top+=${NAVBAR_HEIGHT}px`,

                end: () => {
                    const viewportHeight =
                        window.innerHeight - NAVBAR_HEIGHT;

                    return `+=${viewportHeight * (slides.length - 1)}`;
                },

                scrub: 0.35,

                anticipatePin: 1,

                invalidateOnRefresh: true,

                snap: {
                    snapTo: "labelsDirectional",

                    delay: 0.02,

                    duration: {
                        min: 0.2,
                        max: 0.55,
                    },

                    ease: "power2.out",

                    inertia: true,
                },
            });

            /*
             * =========================================
             * REFRESH
             * =========================================
             */

            const refresh = () => {
                ScrollTrigger.refresh();
            };

            window.addEventListener(
                "resize",
                refresh
            );

            window.addEventListener(
                "orientationchange",
                refresh
            );

            requestAnimationFrame(refresh);

            /*
             * Cleanup
             */

            return () => {
                window.removeEventListener(
                    "resize",
                    refresh
                );

                window.removeEventListener(
                    "orientationchange",
                    refresh
                );

                scrollTrigger.kill();
                timeline.kill();
            };
        }, section);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="home-scroll-hero"
        >
            <div
                ref={pinRef}
                className="home-scroll-hero__pin"
            >
                {/* =====================================
                    SLIDES
                ====================================== */}

                <div className="home-scroll-hero__slides">
                    {slides.map((slide, index) => (
                        <article
                            key={slide.number}
                            ref={(element) => {
                                slidesRef.current[index] =
                                    element;
                            }}
                            className="home-scroll-slide"
                        >
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="home-scroll-slide__image"
                            />

                            <div className="home-scroll-slide__overlay" />

                            {/* =================================
                                CONTENT
                            ================================= */}

                            <div className="home-scroll-slide__content">
                                <div className="home-part-card">

                                    <div className="home-part-card__top">

                                        <div className="home-part-card__heading">

                                            <div className="home-part-card__number">
                                                {slide.number}
                                            </div>

                                            <div className="home-part-card__category">
                                                {slide.category}
                                            </div>

                                        </div>

                                        <div className="home-part-card__image-wrapper">
                                            <img
                                                src={slide.image}
                                                alt=""
                                                className="home-part-card__image"
                                            />
                                        </div>

                                    </div>

                                    <h2 className="home-part-card__title">
                                        {slide.title}
                                    </h2>

                                    <p className="home-part-card__description">
                                        {slide.description}
                                    </p>

                                    {slide.final && (
                                        <div className="home-part-card__actions">

                                            <button
                                                type="button"
                                                className="home-part-card__primary"
                                            >
                                                ورود به فروشگاه
                                            </button>

                                            <button
                                                type="button"
                                                className="home-part-card__secondary"
                                            >
                                                مشاهده قطعات
                                            </button>

                                        </div>
                                    )}

                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* =====================================
                    PROGRESS
                ====================================== */}

                <div className="home-scroll-progress">
                    <div className="home-scroll-progress__line" />

                    {slides.map((slide, index) => (
                        <div
                            key={slide.number}
                            ref={(element) => {
                                progressRef.current[index] =
                                    element;
                            }}
                            className="home-scroll-progress__item"
                        >
                            <span className="home-scroll-progress__number">
                                {slide.number}
                            </span>

                            <span className="home-scroll-progress__dot" />
                        </div>
                    ))}
                </div>

                {/* =====================================
                    SCROLL HINT
                ====================================== */}

                <div className="home-scroll-hint">
                    <span>SCROLL</span>

                    <span className="home-scroll-hint__arrow">
                        ↓
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Hero;