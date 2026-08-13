function Home() {
    return (
        <section
            className="
        mx-auto
        max-w-7xl
        px-4
        py-20
        sm:px-6
        lg:px-8
      "
        >
            <div className="max-w-3xl">
        <span
            className="
            inline-block
            rounded-full
            bg-primary/10
            px-4
            py-2
            text-sm
            font-medium
            text-primary
          "
        >
          خوش آمدید
        </span>

                <h1
                    className="
            mt-6
            text-4xl
            font-bold
            leading-tight
            text-text-main
            sm:text-5xl
            lg:text-6xl
          "
                >
                    پروژه React
                    <span className="text-primary">
            {" "}
                        مدرن و حرفه‌ای
          </span>
                </h1>

                <p
                    className="
            mt-6
            max-w-2xl
            text-lg
            leading-8
            text-text-muted
          "
                >
                    این پروژه با React، Vite و Tailwind CSS ساخته شده
                    و دارای ساختار قابل توسعه، سیستم رنگ مرکزی و
                    پشتیبانی از حالت روشن و تاریک است.
                </p>

                <div
                    className="
            mt-8
            flex
            flex-wrap
            gap-4
          "
                >
                    <button
                        className="
              rounded-xl
              bg-primary
              px-6
              py-3
              font-medium
              text-white
              transition
              duration-200
              hover:bg-primary-hover
              active:scale-95
            "
                    >
                        شروع کنید
                    </button>

                    <button
                        className="
              rounded-xl
              border
              border-border
              bg-surface
              px-6
              py-3
              font-medium
              text-text-main
              transition
              hover:border-primary
              hover:text-primary
            "
                    >
                        اطلاعات بیشتر
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Home;