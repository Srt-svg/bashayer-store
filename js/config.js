/**
 * إعدادات المتجر المركزية - متجر بشاير
 * Optimized High-Converting Strategy for Kuwait Market
 */

const STORE_CONFIG = {
    storeName: "متجر بشاير",
    storeSubtitle: "Bashayer Store - الكويت",
    country: "الكويت",
    currency: "د.ك",
    currencyCode: "KWD",
    whatsappNumber: "96596682986",

    shipping: {
        cost: 0.000,
        label: "توصيل سريع مجاني لكافة مناطق الكويت (24 - 48 ساعة)",
        guarantee: "الدفع عند الاستلام بعد المعاينة والفحص (نقدًا أو كي نت مع المندوب)"
    },

    governorates: [
        "العاصمة",
        "حولي",
        "الفروانية",
        "الأحمدي",
        "مبارك الكبير",
        "الجهراء"
    ],

    product: {
        id: "icemag-turbo",
        title: "شاحن ومبرد السيارة اللاسلكي الذكي بتقنية التبريد النشط (IceMag Turbo)",
        subtitle: "تقنية التبريد شبه الموصل لشحن فائق السرعة وتبريد فوري للهاتف أثناء القيادة في شمس الكويت",
        basePrice: 13.500,
        originalPrice: 21.000,
        discountLabel: "وفر 35% لفترة محدودة",
        rating: 4.96,
        reviewsCount: 248,
        stockRemaining: 8,
        activeViewers: 17,
        
        images: [
            "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80"
        ],

        offers: [
            {
                id: 1,
                title: "جهاز واحد (حامل ومبرد ذكي)",
                subtitle: "حماية وشحن لهاتف واحد",
                quantity: 1,
                price: 13.500,
                badge: null,
                isBestValue: false
            },
            {
                id: 2,
                title: "جهازان (باقة التوفير لسيارتين)",
                subtitle: "وفر 4.000 د.ك إضافية + توصيل مجاني",
                quantity: 2,
                price: 23.000,
                badge: "العرض الأكثر طلباً وتوفيراً 🔥",
                isBestValue: true
            }
        ],

        faqs: [
            {
                q: "متى وكيف أدفع قيمة الطلب؟",
                a: "الدفع عند الاستلام بنسبة 100%. لا تدفع أي مبلغ مقدمًا؛ عند وصول مندوب التوصيل إلى بيتك، تفتح الكرتونة وتفحص الجهاز وتتأكد منه تمامًا، ثم تدفع للمندوب (سواء نقدًا أو بالكي نت KNET عبر جهاز الدفع مع المندوب)."
            },
            {
                q: "كم يستغرق التوصيل داخل الكويت؟",
                a: "التوصيل يتم خلال 24 إلى 48 ساعة كحد أقصى لكافة مناطق ومحافظات الكويت."
            },
            {
                q: "كيف تحمي ميزة التبريد هاتفي من حرارة الصيف؟",
                a: "الجهاز يحتوي على شريحة تبريد إلكترونية نشطة (Semiconductor Cooling) تعمل فور وضع الهاتف عليه، وتخفض حرارته إلى 12° مئوية في ثوانٍ، مما يمنع انطفاء الهاتف أو تعليق خرائط Google أثناء القيادة."
            },
            {
                q: "هل يتوافق مع جميع أنواع الهواتف؟",
                a: "نعم، يدعم هواتف آيفون (MagSafe) مباشرة، وجميع هواتف سامسونج وأندرويد من خلال الحلقة المغناطيسية المرفقة مجانًا في العلبة."
            }
        ]
    },

    livePurchases: [
        { name: "فهد العازمي", city: "حولي", offer: "باقة جهازين", time: "منذ 3 دقائق" },
        { name: "سلطان المطيري", city: "الفروانية", offer: "جهاز واحد", time: "منذ 7 دقائق" },
        { name: "خالد العجمي", city: "الأحمدي", offer: "باقة جهازين", time: "منذ 12 دقيقة" },
        { name: "أم راشد", city: "العاصمة", offer: "جهاز واحد", time: "منذ 19 دقيقة" }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = STORE_CONFIG;
}
