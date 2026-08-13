import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faArrowRight,
    faHouse,
    faMotorcycle,
    faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

import "./NotFound.css";

function NotFound() {
    return (
        <section
            dir="rtl"
            className="
        relative
        flex
        min-h-[calc(100vh-80px)]
        items-center
        justify-center
        overflow-hidden
        bg-background
        px-4
        py-16
        transition-colors
        duration-300
        sm:px-6
        lg:px-8
      "
        >
            {/* پس‌زمینه تزئینی */}

            <div
                className="
          pointer-events-none
          absolute
          top-10
          start-10
          h-64
          w-64
          rounded-full
          bg-primary/10
          blur-3xl
        "
            />

            <div
                className="
          pointer-events-none
          absolute
          bottom-10
          end-10
          h-80
          w-80
          rounded-full
          bg-primary/10
          blur-3xl
        "
            />

            {/* خطوط تزئینی */}

            <div className="not-found-road" />

            <div
                className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-4xl
          flex-col
          items-center
          text-center
        "
            >
                {/* موتور متحرک */}

                <div className="motorcycle-animation">
                    <div className="motorcycle-shadow" />

                    <div className="motorcycle-wrapper">
                        <FontAwesomeIcon
                            icon={faMotorcycle}
                            className="motorcycle-icon"
                        />
                    </div>
                </div>

                {/* عدد 404 */}

                <div className="relative mt-2">
          <span
              className="
              select-none
              text-[110px]
              font-black
              leading-none
              tracking-tight
              text-text-main
              transition-colors
              duration-300
              sm:text-[170px]
              md:text-[230px]
            "
          >
            404
          </span>
                </div>

                {/* متن */}

                <h1
                    className="
            mt-2
            text-2xl
            font-black
            text-text-main
            sm:text-3xl
            md:text-4xl
          "
                >
                    انگار مسیر را اشتباه آمدی!
                </h1>

                <p
                    className="
            mx-auto
            mt-4
            max-w-xl
            text-sm
            leading-8
            text-text-muted
            sm:text-base
          "
                >
                    صفحه‌ای که دنبال آن هستید پیدا نشد.
                    احتمالاً این مسیر وجود ندارد یا آدرس آن تغییر کرده است.
                </p>

                {/* دکمه‌ها */}

                <div
                    className="
            mt-8
            flex
            w-full
            flex-col
            items-center
            justify-center
            gap-3
            sm:flex-row
          "
                >
                    {/* خانه */}

                    <Link
                        to="/"
                        className="
              inline-flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-primary
              px-6
              py-3.5
              text-sm
              font-bold
              text-white
              shadow-lg
              shadow-primary/25
              transition-all
              duration-200
              hover:-translate-y-1
              hover:shadow-xl
              active:translate-y-0
              sm:w-auto
            "
                    >
                        <FontAwesomeIcon icon={faHouse} />

                        بازگشت به صفحه اصلی
                    </Link>

                    {/* صفحه قبل */}

                    <button
                        type="button"
                        onClick={() => window.history.back()}
                        className="
              inline-flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-border
              bg-surface
              px-6
              py-3.5
              text-sm
              font-bold
              text-text-main
              transition-all
              duration-200
              hover:border-primary
              hover:text-primary
              active:scale-95
              sm:w-auto
            "
                    >
                        <FontAwesomeIcon icon={faRotateLeft} />

                        برگشت به صفحه قبل
                    </button>
                </div>

                {/* لینک محصولات */}

                <Link
                    to="/products"
                    className="
            group
            mt-8
            inline-flex
            items-center
            gap-2
            text-sm
            text-text-muted
            transition-colors
            duration-200
            hover:text-primary
          "
                >
          <span>
            مشاهده لوازم یدکی موتورسیکلت
          </span>

                    <FontAwesomeIcon
                        icon={faArrowRight}
                        className="
              text-xs
              transition-transform
              duration-200
              group-hover:translate-x-1
            "
                    />
                </Link>
            </div>
        </section>
    );
}

export default NotFound;