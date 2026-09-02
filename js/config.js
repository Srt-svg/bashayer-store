/**
 * إعدادات المتجر المركزية والمحتوى التفاعلي - متجر بشاير
 * Enterprise Store Configuration & Dynamic Content
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
        label: "توصيل سريع مجاني لجميع مناطق الكويت",
        guarantee: "الدفع نقدًا عند الاستلام بعد المعاينة"
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
        id: "umbrella-pro",
        title: "المظلة الذكية للزجاج الأمامي للسيارة (Titanium Pro)",
        subtitle: "تقنية العزل الحراري المزدوج 99.8% ضد شمس وصيف الكويت الحارق",
        basePrice: 11.500,
        originalPrice: 18.000,
        discountLabel: "وفر 35% لفترة محدودة",
        rating: 4.94,
        reviewsCount: 236,
        stockRemaining: 9,
        activeViewers: 14,
        
        images: [
            "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=85",
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=600&q=80"
        ],

        offers: [
            {
                id: 1,
                title: "قطعة واحدة (مظلة سيارة)",
                subtitle: "حماية كاملة لسيارة واحدة",
                quantity: 1,
                price: 11.500,
                badge: null,
                isBestValue: false
            },
            {
                id: 2,
                title: "قطعتان (باقة التوفير العائلية)",
                subtitle: "وفر 3.500 د.ك إضافية + توصيل مجاني",
                quantity: 2,
                price: 19.500,
                badge: "الأكثر طلباً وتوفيراً 🔥",
                isBestValue: true
            }
        ],

        faqs: [
            {
                q: "كيف يعمل نظام الدفع عند الاستلام؟",
                a: "لا تدفع أي فلس عند الطلب من الموقع. سيصلك مندوبنا حتى باب بيتك، تفحص المظلة وتتأكد من جودتها ومقاسها، ثم تسلّم المبلغ نقدًا للمندوب."
            },
            {
                q: "كم يستغرق التوصيل داخل الكويت؟",
                a: "التوصيل فائق السرعة ويستغرق ما بين 24 إلى 48 ساعة فقط لكافة محافظات ومناطق الكويت (العاصمة، حولي، الفروانية، الأحمدي، مبارك الكبير، الجهراء)."
            },
            {
                q: "هل تناسب سيارتي مهما كان نوعها؟",
                a: "نعم، تم تصميم المظلة بمقاس قياسي هندسي مرن يغطي زجاج سيارات الصالون، سيارات الدفع الرباعي (SUV/جيب)، والسيارات العائلية بالكامل."
            },
            {
                q: "هل الأطراف المعدنية تخدش ديكور السيارة أو الطبلون؟",
                a: "أبدًا، جميع أطراف وأضلاع المظلة مغلفة ومحمية بمطاط سيليكوني ناعم يمنع أي احتكاك أو خدش لزجاج وطبلون السيارة."
            }
        ]
    },

    // إشعارات المبيعات التفاعلية الحية
    livePurchases: [
        { name: "فهد العازمي", city: "حولي", offer: "باقة قطعتين", time: "منذ 4 دقائق" },
        { name: "سلطان المطيري", city: "الفروانية", offer: "قطعة واحدة", time: "منذ 8 دقائق" },
        { name: "أم راشد", city: "العاصمة", offer: "باقة قطعتين", time: "منذ 15 دقيقة" },
        { name: "ناصر الشمري", city: "الجهراء", offer: "قطعة واحدة", time: "منذ 21 دقيقة" }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = STORE_CONFIG;
}
