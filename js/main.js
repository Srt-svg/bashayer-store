document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('checkout-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('cust-name').value.trim();
            const phone = document.getElementById('cust-phone').value.trim();
            const gov = document.getElementById('cust-gov').value;
            const addr = document.getElementById('cust-address').value.trim();

            if (!CheckoutManager.validateKuwaitPhone(phone)) {
                alert("يرجى إدخال رقم هاتف كويتي صحيح مكون من 8 أرقام يبدأ بـ (9 أو 6 أو 5)");
                document.getElementById('cust-phone').focus();
                return;
            }

            document.getElementById('success-box').classList.remove('hidden');
            const targetUrl = CheckoutManager.submitOrder({ name, phone, gov, addr });
            setTimeout(() => { window.open(targetUrl, '_blank'); }, 750);
        });
    }
});
