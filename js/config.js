const STORE_CONFIG = {
    storeName: "متجر بشاير",
    storeSubtitle: "Bashayer Store - الكويت",
    country: "الكويت",
    currency: "د.ك",
    currencyCode: "KWD",
    whatsappNumber: "96596682986",
    shipping: { cost: 0.000, formattedCost: "توصيل مجاني لفترة محدودة", estimatedDelivery: "24 - 48 ساعة لكافة مناطق الكويت" },
    governorates: ["العاصمة", "حولي", "الفروانية", "الأحمدي", "مبارك الكبير", "الجهراء"],
    product: {
        id: "car-umbrella-01",
        title: "المظلة الذكية للزجاج الأمامي للسيارة",
        subtitle: "عزل فائق 99% من حرارة شمس الكويت الحارقة",
        description: "مظلة قابلة للطي بتصميم ميكانيكي سريع تمنح مقصورة سيارتك برودة فورية وتحمي الفرش من التلف.",
        basePrice: 11.500, originalPrice: 18.000, discountPercentage: "35%",
        offers: [
            { id: 1, title: "قطعة واحدة", subtitle: "حماية سيارة واحدة", quantity: 1, price: 11.500 },
            { id: 2, title: "قطعتان (عرض العائلة والتوفير)", subtitle: "وفر 3.500 د.ك", quantity: 2, price: 19.500 }
        ]
    },
    paymentMethod: { id: "cod", name: "الدفع عند الاستلام (COD)" }
};
