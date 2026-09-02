/**
 * التفاعلات الحية وإدارة تجربة المستخدم الفائقة
 * Interactive UI Controller, Live Social Proof & Micro-interactions
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. إدارة معرض الصور (Gallery Controller)
    const mainImg = document.getElementById('main-product-img');
    const thumbButtons = document.querySelectorAll('.gallery-thumb');
    
    thumbButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const newSrc = btn.getAttribute('data-img');
            if (mainImg && newSrc) {
                mainImg.src = newSrc;
                thumbButtons.forEach(b => b.classList.remove('ring-2', 'ring-emerald-600', 'opacity-100'));
                thumbButtons.forEach(b => b.classList.add('opacity-70'));
                btn.classList.add('ring-2', 'ring-emerald-600', 'opacity-100');
                btn.classList.remove('opacity-70');
            }
        });
    });

    // 2. الشريط السفلي المثبت للهواتف (Sticky Bottom Action Bar)
    const stickyBar = document.getElementById('sticky-bottom-bar');
    const heroSection = document.getElementById('hero-section');

    if (stickyBar && heroSection) {
        window.addEventListener('scroll', () => {
            const heroBottom = heroSection.getBoundingClientRect().bottom;
            if (heroBottom < 100) {
                stickyBar.classList.add('active');
            } else {
                stickyBar.classList.remove('active');
            }
        });
    }

    // 3. أكورديون الأسئلة الشائعة (FAQ Accordion)
    const faqContainer = document.getElementById('faq-container');
    if (faqContainer && STORE_CONFIG.product.faqs) {
        faqContainer.innerHTML = STORE_CONFIG.product.faqs.map((faq, i) => `
            <div class="faq-item border border-slate-200/80 rounded-xl overflow-hidden bg-white transition-all duration-200">
                <button type="button" class="w-full px-5 py-4 text-right flex items-center justify-between font-bold text-slate-800 hover:text-emerald-700 text-sm sm:text-base">
                    <span>${faq.q}</span>
                    <i class="fa-solid fa-chevron-down faq-chevron text-xs text-slate-400 transition-transform duration-200"></i>
                </button>
                <div class="faq-answer px-5 text-xs sm:text-sm text-slate-600 leading-relaxed pb-4">
                    ${faq.a}
                </div>
            </div>
        `).join('');

        const items = faqContainer.querySelectorAll('.faq-item');
        items.forEach(item => {
            const btn = item.querySelector('button');
            btn.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                items.forEach(i => i.classList.remove('active'));
                if (!isActive) item.classList.add('active');
            });
        });
    }

    // 4. محرك الإشعارات الاجتماعية الحية (Live Social Proof Engine)
    const toast = document.getElementById('live-toast');
    const toastName = document.getElementById('toast-customer-name');
    const toastCity = document.getElementById('toast-customer-city');
    const toastOffer = document.getElementById('toast-offer');
    const toastTime = document.getElementById('toast-time');

    if (toast && STORE_CONFIG.livePurchases.length > 0) {
        let currentIndex = 0;
        function showNextToast() {
            const data = STORE_CONFIG.livePurchases[currentIndex];
            if (toastName) toastName.innerText = data.name;
            if (toastCity) toastCity.innerText = data.city;
            if (toastOffer) toastOffer.innerText = data.offer;
            if (toastTime) toastTime.innerText = data.time;

            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 4500);

            currentIndex = (currentIndex + 1) % STORE_CONFIG.livePurchases.length;
        }

        // إطلاق أول إشعار بعد 4 ثوانٍ ثم كل 14 ثانية
        setTimeout(showNextToast, 4000);
        setInterval(showNextToast, 14000);
    }

    // 5. نموذج الطلب المتقدم
    const form = document.getElementById('order-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('input-name').value.trim();
            const phone = document.getElementById('input-phone').value.trim();
            const gov = document.getElementById('input-gov').value;
            const address = document.getElementById('input-address').value.trim();
            const notes = document.getElementById('input-notes') ? document.getElementById('input-notes').value.trim() : '';

            if (!CheckoutManager.validateKuwaitPhone(phone)) {
                const phoneError = document.getElementById('phone-error');
                if (phoneError) phoneError.classList.remove('hidden');
                document.getElementById('input-phone').focus();
                return;
            }

            const successCard = document.getElementById('order-success-card');
            if (successCard) {
                successCard.classList.remove('hidden');
                successCard.scrollIntoView({ behavior: 'smooth' });
            }

            const targetUrl = CheckoutManager.buildWhatsAppPayload({ name, phone, gov, address, notes });
            setTimeout(() => {
                window.open(targetUrl, '_blank');
            }, 800);
        });
    }
});
