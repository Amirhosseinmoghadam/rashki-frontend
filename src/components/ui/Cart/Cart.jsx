import SpecularButton from "../Button/SpecularButton";
import ElectricBorder from "../Border/ElectricBorder";

const ProductCard = ({
                         image,
                         title,
                         description,
                         price,
                         oldPrice,
                         badge,
                         discount,
                         currency = "تومان",
                         imageAlt = "",
                         onClick,
                         onAddToCart,
                         variant = "default",
                         showButton = true,
                         buttonText = "افزودن به سبد",
                         className = "",
                     }) => {
    const formatPrice = (value) => {
        if (
            value === null ||
            value === undefined ||
            value === ""
        ) {
            return "";
        }

        if (typeof value === "number") {
            return new Intl.NumberFormat(
                "fa-IR"
            ).format(value);
        }

        return value;
    };

    const isFeatured =
        variant === "featured";

    const cardContent = (
        <article
            onClick={onClick}
            className={`
        group
        relative
        flex
        h-full
        cursor-pointer
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-[var(--color-border)]
        bg-[var(--color-surface)]
        text-[var(--color-text-main)]
        transition-all
        duration-500
        ease-out
        hover:-translate-y-1
        hover:shadow-xl
        hover:shadow-black/5
        dark:hover:shadow-black/20
        ${className}
      `}
        >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-background)]">
                {image ? (
                    <img
                        src={image}
                        alt={imageAlt || title}
                        loading="lazy"
                        className="
              h-full
              w-full
              object-contain
              p-5
              transition-transform
              duration-700
              ease-out
              group-hover:scale-105
            "
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-sm text-[var(--color-text-muted)]">
                        تصویری موجود نیست
                    </div>
                )}

                {/* Image gradient */}
                <div
                    className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/10
            via-transparent
            to-transparent
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
                />

                {/* Badge */}
                {badge && (
                    <span
                        className="
              absolute
              right-3
              top-3
              rounded-full
              bg-[var(--color-primary)]
              px-3
              py-1
              text-xs
              font-semibold
              text-white
              shadow-sm
            "
                    >
            {badge}
          </span>
                )}

                {/* Discount */}
                {discount && (
                    <span
                        className="
              absolute
              left-3
              top-3
              rounded-full
              border
              border-[var(--color-border)]
              bg-[var(--color-background)]/90
              px-3
              py-1
              text-xs
              font-semibold
              text-[var(--color-primary)]
              backdrop-blur-md
            "
                    >
            {discount}
          </span>
                )}
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
                {/* Title */}
                <h3
                    className="
            line-clamp-1
            text-base
            font-bold
            text-[var(--color-text-main)]
          "
                >
                    {title}
                </h3>

                {/* Description */}
                {description && (
                    <p
                        className="
              mt-2
              line-clamp-2
              min-h-[40px]
              text-sm
              leading-5
              text-[var(--color-text-muted)]
            "
                    >
                        {description}
                    </p>
                )}

                {/* Price */}
                <div className="mt-5">
                    {oldPrice && (
                        <div
                            className="
                text-xs
                text-[var(--color-text-muted)]
                line-through
              "
                        >
                            {formatPrice(oldPrice)}{" "}
                            {currency}
                        </div>
                    )}

                    <div className="mt-1 flex items-baseline gap-1">
            <span
                className="
                text-xl
                font-bold
                tracking-tight
                text-[var(--color-primary)]
              "
            >
              {formatPrice(price)}
            </span>

                        <span
                            className="
                text-xs
                text-[var(--color-text-muted)]
              "
                        >
              {currency}
            </span>
                    </div>
                </div>

                {/* Button */}
                {showButton && (
                    <div
                        className="mt-5"
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    >
                        <SpecularButton
                            size="md"
                            radius={12}
                            variant="primary"
                            className="w-full"
                            onClick={onAddToCart}
                        >
                            {buttonText}
                        </SpecularButton>
                    </div>
                )}
            </div>
        </article>
    );

    // Featured card
    if (isFeatured) {
        return (
            <ElectricBorder
                color="var(--color-primary)"
                speed={0.8}
                chaos={0.025}
                borderRadius={18}
                thickness={1}
            >
                {cardContent}
            </ElectricBorder>
        );
    }

    return cardContent;
};

export default ProductCard;