function Contact() {
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
            <div className="max-w-xl">
        <span
            className="
            text-sm
            font-medium
            text-primary
          "
        >
          ارتباط با ما
        </span>

                <h1
                    className="
            mt-4
            text-4xl
            font-bold
            text-text-main
          "
                >
                    تماس با ما
                </h1>

                <p
                    className="
            mt-4
            text-text-muted
          "
                >
                    برای ارتباط با ما می‌توانید از طریق فرم زیر اقدام کنید.
                </p>

                <form
                    className="
            mt-10
            space-y-5
          "
                >
                    <input
                        type="text"
                        placeholder="نام شما"
                        className="
              w-full
              rounded-xl
              border
              border-border
              bg-surface
              px-4
              py-3
              text-text-main
              outline-none
              transition
              placeholder:text-text-muted
              focus:border-primary
            "
                    />

                    <input
                        type="email"
                        placeholder="ایمیل شما"
                        className="
              w-full
              rounded-xl
              border
              border-border
              bg-surface
              px-4
              py-3
              text-text-main
              outline-none
              transition
              placeholder:text-text-muted
              focus:border-primary
            "
                    />

                    <textarea
                        rows="5"
                        placeholder="پیام شما"
                        className="
              w-full
              resize-none
              rounded-xl
              border
              border-border
              bg-surface
              px-4
              py-3
              text-text-main
              outline-none
              transition
              placeholder:text-text-muted
              focus:border-primary
            "
                    />

                    <button
                        type="submit"
                        className="
              rounded-xl
              bg-primary
              px-6
              py-3
              font-medium
              text-white
              transition
              hover:bg-primary-hover
              active:scale-95
            "
                    >
                        ارسال پیام
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;