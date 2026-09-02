/**
 * إدارة وتأكيد عمليات الطلب بأعلى معدل تحويل (High Conversion)
 */

const CheckoutManager = {
    selectedOffer: STORE_CONFIG.product.offers[1], // باقة التوفير افتراضيًا

    init() {
        this.renderOffersUI();
        this.updatePricing();
    },

    renderOffersUI() {
        const container = document.getElementById('offers-container');
        if (!container) return;

        container.innerHTML = STORE_CONFIG.product.offers.map((offer) => `
            <label class="relative flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 ${offer.isBestValue ? 'border-emerald-500 bg-emerald-50/50 shadow-sm' : 'border-slate-200 hover:border-emerald-300 bg-white'}">
                ${offer.badge ? `<span class="absolute -top-3 left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[11px] font-extrabold px-3 py-0.5 rounded-full shadow-sm">${offer.badge}</span>` : ''}
                <div class="flex items-center gap-3">
                    <input type="radio" name="offer_selection" value="${offer.id}" ${offer.id === this.selectedOffer.id ? 'checked' : ''} onchange="CheckoutManager.setOffer(${offer.id})" class="w-5 h-5 text-emerald-600 focus:ring-emerald-500 border-gray-300">
                    <div>
                        <span class="block font-bold text-slate-900 text-sm sm:text-base">${offer.title}</span>
                        <span class="text-xs text-slate-500">${offer.subtitle}</span>
                    </div>
                </div>
                <div class="text-left">
                    <span class="text-lg font-black text-emerald-700">${offer.price.toFixed(3)}</span>
                    <span class="text-xs font-bold text-emerald-600 block">${STORE_CONFIG.currency}</span>
                </div>
            </label>
        `).join('');
    },

    setOffer(offerId) {
        const found = STORE_CONFIG.product.offers.find(o => o.id === offerId);
        if (found) {
            this.selectedOffer = found;
            this.updatePricing();
            this.renderOffersUI();
        }
    },

    updatePricing() {
        const formatted = `${this.selectedOffer.price.toFixed(3)} ${STORE_CONFIG.currency}`;
        
        const heroPrice = document.getElementById('display-hero-price');
        const summarySubtotal = document.getElementById('summary-subtotal');
        const summaryTotal = document.getElementById('summary-total');
        const stickyPrice = document.getElementById('sticky-price');

        if (heroPrice) heroPrice.innerText = formatted;
        if (summarySubtotal) summarySubtotal.innerText = formatted;
        if (summaryTotal) summaryTotal.innerText = formatted;
        if (stickyPrice) stickyPrice.innerText = formatted;
    },

    validateKuwaitPhone(phone) {
        const clean = phone.replace(/[^0-9]/g, '');
        return /^(9|6|5)[0-9]{7}$/.test(clean);
    },

    buildWhatsAppPayload(customer) {
        const offer = this.selectedOffer;
        const total = `${offer.price.toFixed(3)} ${STORE_CONFIG.currency}`;

        const text = `مرحباً ${STORE_CONFIG.storeName}، أود تأكيد طلب شراء جديد:

📦 *تفاصيل المنتج والطلب:*
- المنتج: ${STORE_CONFIG.product.title}
- الباقة: ${offer.title} (${offer.quantity} قطعة)
- السعر المطلوب: ${total} (شحن سريع مجاني)
- طريقة الدفع: الدفع عند الاستلام بعد المعاينة (نقدًا أو كي نت مع المندوب)

👤 *بيانات المستلم والتوصيل:*
- الاسم: ${customer.name}
- الهاتف: ${customer.phone}
- المحافظة: ${customer.gov}
- العنوان: ${customer.address}
${customer.notes ? `- ملاحظات: ${customer.notes}` : ''}

يرجى إفادتي بموعد خروج الشحنة. مع الشكر والتقدير!`;

        return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    CheckoutManager.init();
});
