function About() {
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
            text-sm
            font-medium
            text-primary
          "
        >
          درباره ما
        </span>

                <h1
                    className="
            mt-4
            text-4xl
            font-bold
            text-text-main
          "
                >
                    درباره پروژه
                </h1>

                <p
                    className="
            mt-6
            text-lg
            leading-8
            text-text-muted
          "
                >
                    این پروژه با هدف ایجاد یک ساختار حرفه‌ای،
                    قابل توسعه و قابل نگهداری طراحی شده است.
                </p>
            </div>
        </section>
    );
}

export default About;