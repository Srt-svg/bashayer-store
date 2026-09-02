const CheckoutManager = {
    selectedOffer: STORE_CONFIG.product.offers[0],
    setOffer(offerId) {
        const offer = STORE_CONFIG.product.offers.find(o => o.id === offerId);
        if (offer) {
            this.selectedOffer = offer;
            const formatted = `${offer.price.toFixed(3)} ${STORE_CONFIG.currency}`;
            document.getElementById('display-price').innerText = formatted;
            document.getElementById('summary-subtotal').innerText = formatted;
            document.getElementById('summary-total').innerText = formatted;
        }
    },
    validateKuwaitPhone(phone) {
        return /^(9|6|5)[0-9]{7}$/.test(phone.replace(/[^0-9]/g, ''));
    },
    submitOrder(data) {
        const total = `${this.selectedOffer.price.toFixed(3)} ${STORE_CONFIG.currency}`;
        const msg = `مرحباً ${STORE_CONFIG.storeName}، أود تأكيد طلب شراء:

🛒 *تفاصيل الطلب:*
- المنتج: ${STORE_CONFIG.product.title}
- الباقة: ${this.selectedOffer.title}
- الإجمالي: ${total} (توصيل مجاني)
- طريقة الدفع: الدفع عند الاستلام (COD)

👤 *بيانات المستلم:*
- الاسم: ${data.name}
- الهاتف: ${data.phone}
- المحافظة: ${data.gov}
- العنوان: ${data.addr}

يرجى تأكيد موعد التوصيل، شكراً!`;
        return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    }
};
