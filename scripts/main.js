document.addEventListener('DOMContentLoaded', function () {
    // مخفی کردن پیام لودینگ در شروع
    document.getElementById('loading-message').classList.add('hidden');
    document.getElementById('result-message').classList.add('hidden');

    document.getElementById('check-button').addEventListener('click', function () {
        const nationalId = document.getElementById('national-id').value.trim();
        const loading = document.getElementById('loading-message');
        const result = document.getElementById('result-message');
        const main = document.querySelector('main');

        // اعتبارسنجی ساده کد ملی (۱۰ رقم)
        if (!/^\d{10}$/.test(nationalId)) {
            result.textContent = 'کد ملی معتبر وارد کنید';
            result.className = 'final-message';
            result.classList.remove('hidden');
            loading.classList.add('hidden');
            main.classList.remove('blurred');
            return;
        }

        // نمایش لودینگ و بلور
        loading.classList.remove('hidden');
        result.classList.add('hidden');
        main.classList.add('blurred');

        setTimeout(() => {
            loading.classList.add('hidden');
            main.classList.remove('blurred');
            result.textContent = `کد ملی ${nationalId} تا این لحظه در احکام اجرایی جهت توقیف نیامده است.`;
            result.className = 'final-message';
            result.classList.remove('hidden');
