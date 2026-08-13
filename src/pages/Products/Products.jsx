function Products() {
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
            <h1
                className="
          text-4xl
          font-bold
          text-text-main
        "
            >
                محصولات
            </h1>

            <p
                className="
          mt-4
          text-text-muted
        "
            >
                لیست محصولات در آینده در این قسمت قرار می‌گیرد.
            </p>

            <div
                className="
          mt-10
          grid
          gap-6
          sm:grid-cols-2
          lg:grid-cols-3
        "
            >
                {[1, 2, 3].map((item) => (
                    <div
                        key={item}
                        className="
              rounded-2xl
              border
              border-border
              bg-surface
              p-6
              transition
              hover:-translate-y-1
              hover:border-primary
            "
                    >
                        <div
                            className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-primary/10
                text-primary
              "
                        >
                            {item}
                        </div>

                        <h2
                            className="
                mt-5
                text-xl
                font-bold
                text-text-main
              "
                        >
                            محصول {item}
                        </h2>

                        <p
                            className="
                mt-3
                text-text-muted
              "
                        >
                            توضیحات کوتاه مربوط به این محصول.
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Products;