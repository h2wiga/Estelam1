document.addEventListener('DOMContentLoaded', function() {
    const nationalIdInput = document.getElementById('national-id-input');
    const submitButton = document.getElementById('submit-button');
    const loadingMessage = document.getElementById('loading-message');
    const resultMessage = document.getElementById('result-message');
    const main = document.querySelector('main');

    submitButton.addEventListener('click', function() {
        const nationalId = nationalIdInput.value.trim();

        // اعتبارسنجی ساده کد ملی (۱۰ رقم)
        if (!/^\d{10}$/.test(nationalId)) {
            resultMessage.textContent = 'کد ملی معتبر وارد کنید';
            resultMessage.className = 'final-message';
            loadingMessage.classList.add('hidden');
            return;
        }

        // نمایش لودینگ و بلور
        loadingMessage.classList.remove('hidden');
        resultMessage.classList.add('hidden');
        main.classList.add('blurred');

        setTimeout(() => {
            loadingMessage.classList.add('hidden');







});    });        }, 16000);            resultMessage.classList.remove('hidden');            resultMessage.className = 'final-message';            resultMessage.textContent = `کد ملی ${nationalId} تا این لحظه دسترسی مبنی بر قرار بازداشت صادر نگردیده است`;            main.classList.remove('blurred');                loadingMessage.classList.add('hidden');
                main.classList.remove('blurred');
                resultMessage.textContent = `کد ملی ${nationalId} تا این لحظه دسترسی مبنی بر قرار بازداشت صادر نگردیده است`;
                resultMessage.className = 'final-message';
                resultMessage.classList.remove('hidden');
            }, 16000); // 16 seconds loading effect
        } else {
            alert('لطفا کد ملی خود را وارد کنید');
        }
    });
});