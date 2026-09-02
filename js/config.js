/**
 * إعدادات المتجر المركزية - متجر بشاير
 * UAE Market - Smart Robot Dog (Real High-Res Sourced Images)
 */

const STORE_CONFIG = {
    storeName: "متجر بشاير",
    storeSubtitle: "Bashayer Store - الإمارات",
    country: "الإمارات",
    currency: "د.إ",
    currencyCode: "AED",
    whatsappNumber: "96596682986",

    shipping: {
        cost: 0.000,
        label: "توصيل سريع مجاني لكافة إمارات الدولة (خلال 24 - 48 ساعة)",
        guarantee: "الدفع نقدًا عند الاستلام بعد فتح الصندوق وفحص الجهاز"
    },

    governorates: [
        "دبي",
        "أبوظبي",
        "الشارقة",
        "عجمان",
        "رأس الخيمة",
        "الفجيرة",
        "أم القيوين",
        "العين"
    ],

    product: {
        id: "smart-robot-dog",
        sku: "RPMT-N-TY-ZAM",
        title: "الكلب الآلي الذكي التفاعلي للأطفال (Smart Robot Dog)",
        subtitle: "الروبوت الأذكى والأكثر متعة للأطفال – مصافحة يد، تحكم صوتي، حركات بهلوانية وأصوات تفاعلية مرحة",
        basePrice: 289.00,
        originalPrice: 420.00,
        discountLabel: "وفر 31% لفترة محدودة",
        rating: 4.97,
        reviewsCount: 312,
        stockRemaining: 14,
        activeViewers: 22,
        
        // صور المنتج الحقيقية الرسمية المطابقة تمامًا لمنتج زمبيل ودبدوب
        images: [
            "https://dabdoob-cdn-primary.fra1.cdn.digitaloceanspaces.com/media/master/sku/6Os5TK/7030c103-ce92-40af-ba87-ae9a0530051a_e-Sq5mD2d12.jpeg",
            "https://i5.walmartimages.com/seo/Ficcug-Remote-Control-Robot-Dog-Intelligent-Robot-Toys-Kids-Programmable-Smart-Interactive-Puppy-Pet-Toys-Touch-Sensing-Function-Gift-4-5-6-Ages-Boys_3eb61e1b-53ab-4d2d-89b0-4b3e37c92c0c.fc3eace656f33f5545b80c97b1c2c79e.jpeg",
            "https://www.bedee.net/image/cache/catalog/bedee/MPrkjpZbkiNa4NTC9giu2cRgXLsQObUu4lDbX3ZPwU4q7dBd3KleFEQRuWmfk-1000x1000.jpg",
            "https://i.ebayimg.com/images/g/RVAAAOSwS-xoKo5x/s-l500.jpg"
        ],

        offers: [
            {
                id: 1,
                title: "روبوت واحد (Smart Robot Dog)",
                subtitle: "الهدية المثالية لتنمية ذكاء ومرح طفلك",
                quantity: 1,
                price: 289.00,
                badge: null,
                isBestValue: false
            },
            {
                id: 2,
                title: "روبوتان (باقة التوفير لطفلين / الأصدقاء)",
                subtitle: "وفر 79 درهم إضافية + توصيل مجاني",
                quantity: 2,
                price: 499.00,
                badge: "العرض الأكثر طلباً وتوفيراً 🔥",
                isBestValue: true
            }
        ],

        faqs: [
            {
                q: "متى وكيف أدفع ثمن الطلب؟",
                a: "الدفع نقدًا عند الاستلام (COD) بنسبة 100%. لا تدفع أي درهم مسبقًا؛ عند وصول المندوب لباب بيتك تفحص اللعبة وتتأكد منها ثم تسلّم المبلغ نقدًا للمندوب."
            },
            {
                q: "كم يستغرق التوصيل داخل دولة الإمارات؟",
                a: "التوصيل فائق السرعة ويستغرق من 24 إلى 48 ساعة فقط لكافة الإمارات (دبي، أبوظبي، الشارقة، عجمان، رأس الخيمة، الفجيرة، أم القيوين والعين)."
            },
            {
                q: "ما هي أبرز الحركات والميزات التي يقدمها الكلب الروبوت؟",
                a: "يمتلك الروبوت تقنية التفاعل باللمس ومصافحة اليد (مد كفه الأيسر لمصافحة الطفل)، والاستجابة للأوامر الصوتية، والمشي الذكي والرقص بحركات بهلوانية وأصوات مبهجة مع إضاءة عيون LED تفاعلية."
            },
            {
                q: "كيف يتم شحن الروبوت وما مدة عمل البطارية؟",
                a: "يعمل ببطارية ليثيوم مدمجة قابلة لإعادة الشحن عبر كيبل USB المرفق، ويمنح الطفل ساعات طويلة من اللعب التفاعلي المستمر."
            }
        ]
    },

    livePurchases: [
        { name: "سعيد المنصوري", city: "أبوظبي", offer: "باقة جهازين", time: "منذ 4 دقائق" },
        { name: "مريم الظاهري", city: "العين", offer: "روبوت واحد", time: "منذ 8 دقائق" },
        { name: "راشد المهيري", city: "دبي", offer: "باقة جهازين", time: "منذ 14 دقيقة" },
        { name: "أم خليفة", city: "الشارقة", offer: "روبوت واحد", time: "منذ 21 دقيقة" }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = STORE_CONFIG;
}
