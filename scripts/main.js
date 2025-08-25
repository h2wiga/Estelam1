document.addEventListener('DOMContentLoaded', function () {
    // مخفی کردن پیام لودینگ و نتیجه در شروع
    const loadingMessage = document.getElementById('loading-message');
    const resultMessage = document.getElementById('result-message');
    const checkButton = document.getElementById('check-button');
    const nationalIdInput = document.getElementById('national-id');
    const main = document.querySelector('main');

    if (loadingMessage) loadingMessage.classList.add('hidden');
    if (resultMessage) resultMessage.classList.add('hidden');

    if (checkButton) {
        checkButton.addEventListener('click', function () {
            const nationalId = nationalIdInput ? nationalIdInput.value.trim() : '';
            if (!loadingMessage || !resultMessage || !main) return;

            // اعتبارسنجی ساده کد ملی (۱۰ رقم)
            if (!/^\d{10}$/.test(nationalId)) {
                resultMessage.textContent = 'کد ملی معتبر وارد کنید';
                resultMessage.className = 'final-message';
                resultMessage.classList.remove('hidden');
                loadingMessage.classList.add('hidden');
                main.classList.remove('blurred');
                return;
            }

            // نمایش لودینگ و بلور
            loadingMessage.classList.remove('hidden');
            resultMessage.classList.add('hidden');
            main.classList.add('blurred');

            setTimeout(() => {
                loadingMessage.classList.add('hidden');
                main.classList.remove('blurred');
                resultMessage.textContent = `کد ملی ${nationalId} تا این لحظه در احکام اجرایی جهت توقیف نیامده است.`;
                resultMessage.className = 'final-message';
                resultMessage.classList.remove('hidden');
            }, 9600); // تاخیر ۲ ثانیه‌ای برای شبیه‌سازی پردازش
        });
    }
});
