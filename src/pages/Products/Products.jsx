import ProductCard from "../../components/ui/Cart/Cart";
import ElectricBorder from "../../components/ui/Border/ElectricBorder";
import SpecularButton from "../../components/ui/Button/SpecularButton";

import brakeImage from "../../assets/images/products/brake.png";

const products = [
    {
        id: 1,
        title: "لنت ترمز جلو",
        description: "لنت ترمز با کیفیت مناسب موتورسیکلت",
        price: 850000,
        oldPrice: 950000,
        badge: "پرفروش",
        discount: "۱۰٪ تخفیف",
    },
    {
        id: 2,
        title: "دیسک ترمز جلو",
        description: "دیسک ترمز مقاوم با عملکرد بالا",
        price: 1250000,
        oldPrice: 1400000,
        badge: "ویژه",
        discount: "۸٪ تخفیف",
    },
    {
        id: 3,
        title: "کالیپر ترمز",
        description: "کالیپر ترمز مناسب سیستم ترمز جلو",
        price: 1850000,
        oldPrice: 2100000,
        badge: "پیشنهاد ویژه",
        discount: "۱۲٪ تخفیف",
    },
    {
        id: 4,
        title: "فیلتر روغن موتور",
        description: "فیلتر روغن با کیفیت برای عملکرد بهتر موتور",
        price: 320000,
        oldPrice: 380000,
        badge: "پرفروش",
        discount: "۱۵٪ تخفیف",
    },
    {
        id: 5,
        title: "کلاچ موتور سیکلت",
        description: "مجموعه کلاچ با دوام بالا",
        price: 2100000,
        oldPrice: 2400000,
        badge: "جدید",
        discount: "۱۰٪ تخفیف",
    },
    {
        id: 6,
        title: "زنجیر موتور",
        description: "زنجیر انتقال قدرت با کیفیت بالا",
        price: 780000,
        oldPrice: 890000,
        badge: "پرفروش",
        discount: "۷٪ تخفیف",
    },
    {
        id: 7,
        title: "چرخ زنجیر جلو",
        description: "چرخ زنجیر مناسب سیستم انتقال قدرت",
        price: 490000,
        oldPrice: 560000,
        badge: "ویژه",
        discount: "۱۲٪ تخفیف",
    },
    {
        id: 8,
        title: "چرخ زنجیر عقب",
        description: "چرخ زنجیر مقاوم برای استفاده طولانی",
        price: 850000,
        oldPrice: 970000,
        badge: "پرفروش",
        discount: "۱۰٪ تخفیف",
    },
    {
        id: 9,
        title: "کمک فنر جلو",
        description: "کمک فنر جلو با عملکرد نرم و پایدار",
        price: 2650000,
        oldPrice: 2900000,
        badge: "جدید",
        discount: "۸٪ تخفیف",
    },
    {
        id: 10,
        title: "کمک فنر عقب",
        description: "سیستم تعلیق عقب مناسب موتورسیکلت",
        price: 2350000,
        oldPrice: 2600000,
        badge: "ویژه",
        discount: "۱۰٪ تخفیف",
    },
    {
        id: 11,
        title: "چراغ جلو",
        description: "چراغ جلو با نوردهی مناسب و طراحی استاندارد",
        price: 1450000,
        oldPrice: 1650000,
        badge: "پیشنهاد ویژه",
        discount: "۱۲٪ تخفیف",
    },
    {
        id: 12,
        title: "لاستیک جلو",
        description: "لاستیک جلو مناسب استفاده شهری و جاده‌ای",
        price: 1950000,
        oldPrice: 2200000,
        badge: "پرفروش",
        discount: "۱۱٪ تخفیف",
    },
    {
        id: 13,
        title: "لنت ترمز عقب",
        description: "لنت ترمز عقب با کیفیت و دوام بالا",
        price: 690000,
        oldPrice: 790000,
        badge: "ویژه",
        discount: "۹٪ تخفیف",
    },
    {
        id: 14,
        title: "فلاپ جلو",
        description: "فلاپ جلو با طراحی دقیق و کیفیت بالا",
        price: 1750000,
        oldPrice: 1950000,
        badge: "جدید",
        discount: "۸٪ تخفیف",
    },
    {
        id: 15,
        title: "فیلتر هوا",
        description: "فیلتر هوای مناسب برای عملکرد بهتر موتور",
        price: 410000,
        oldPrice: 470000,
        badge: "پرفروش",
        discount: "۱۳٪ تخفیف",
    },
];

const categories = [
    "همه محصولات",
    "ترمز",
    "موتور",
    "انتقال قدرت",
    "سیستم تعلیق",
];

const Products = () => {
    return (
        <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-main)]">
            {/* ========================================
          Header
      ======================================== */}
            <section className="px-5 pb-10 pt-28 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                        {/* Title */}
                        <div className="max-w-2xl">
              <span className="mb-4 inline-block text-sm font-medium text-[var(--color-primary)]">
                لوازم یدکی موتورسیکلت
              </span>

                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                                محصولات ما
                            </h1>

                            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-text-muted)] sm:text-lg">
                                مجموعه‌ای از قطعات و لوازم یدکی با کیفیت برای
                                نگهداری و عملکرد بهتر موتورسیکلت شما.
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex shrink-0 gap-3">
                            <SpecularButton
                                size="lg"
                                radius={16}
                                variant="primary"
                            >
                                مشاهده همه
                            </SpecularButton>

                            <SpecularButton
                                size="lg"
                                radius={16}
                                variant="outline"
                            >
                                پیشنهاد ویژه
                            </SpecularButton>
                        </div>
                    </div>

                    {/* ========================================
              Categories
          ======================================== */}
                    <div className="mt-10 flex gap-3 overflow-x-auto pb-2">
                        {categories.map((category, index) => (
                            <SpecularButton
                                key={category}
                                size="sm"
                                radius={12}
                                variant={index === 0 ? "primary" : "secondary"}
                                className="shrink-0"
                            >
                                {category}
                            </SpecularButton>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================
          Featured Section
          ElectricBorder فقط اینجا استفاده شده
      ======================================== */}
            <section className="px-5 pb-14 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <ElectricBorder
                        color="var(--color-primary)"
                        speed={0.7}
                        chaos={0.015}
                        borderRadius={24}
                        thickness={1}
                    >
                        <div className="overflow-hidden rounded-3xl bg-[var(--color-surface)]">
                            <div className="grid min-h-[300px] items-center gap-8 p-7 sm:p-10 lg:grid-cols-2 lg:p-14">
                                {/* Text */}
                                <div>
                  <span className="text-sm font-medium text-[var(--color-primary)]">
                    پیشنهاد ویژه امروز
                  </span>

                                    <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                                        قطعات مورد نیاز موتورسیکلت خود را پیدا کنید
                                    </h2>

                                    <p className="mt-4 max-w-xl leading-7 text-[var(--color-text-muted)]">
                                        قطعات مختلف موتور، سیستم ترمز، انتقال قدرت
                                        و سیستم تعلیق را با بهترین کیفیت بررسی کنید.
                                    </p>

                                    <div className="mt-7">
                                        <SpecularButton
                                            size="lg"
                                            radius={14}
                                            variant="primary"
                                        >
                                            مشاهده پیشنهادها
                                        </SpecularButton>
                                    </div>
                                </div>

                                {/* Image */}
                                <div className="flex justify-center">
                                    <img
                                        src={brakeImage}
                                        alt="قطعات موتورسیکلت"
                                        className="
                      h-56
                      w-full
                      max-w-md
                      object-contain
                      transition-transform
                      duration-700
                      hover:scale-105
                      sm:h-64
                    "
                                    />
                                </div>
                            </div>
                        </div>
                    </ElectricBorder>
                </div>
            </section>

            {/* ========================================
          Products
      ======================================== */}
            <section className="px-5 pb-24 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    {/* Section Header */}
                    <div className="mb-8 flex items-end justify-between gap-4">
                        <div>
              <span className="text-sm font-medium text-[var(--color-primary)]">
                فروشگاه
              </span>

                            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                                جدیدترین محصولات
                            </h2>
                        </div>

                        <span className="text-sm text-[var(--color-text-muted)]">
              {products.length} محصول
            </span>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                image={brakeImage}
                                title={product.title}
                                description={product.description}
                                price={product.price}
                                oldPrice={product.oldPrice}
                                badge={product.badge}
                                discount={product.discount}
                                onAddToCart={() => {
                                    console.log(
                                        `محصول ${product.id} به سبد خرید اضافه شد`
                                    );
                                }}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Products;