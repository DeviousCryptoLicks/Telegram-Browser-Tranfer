const userAgent = navigator.userAgent || navigator.vendor || window.opera;

const url = "https://example.com";

// Открываем ссылку в браузере по умолчанию
const openInDefaultBrowser = () => {
    // Для Android
    if (/android/i.test(userAgent)) {
        window.location.href = `intent://${url.replace(/^https?:\/\//, '')}#Intent;scheme=https;package=com.android.chrome;end;`;
    }

    // Для iOS пробуем открыть в различных браузерах
    if (/iPhone|iPad|iPod/i.test(userAgent)) {
        // Попробуем открыть сначала в Safari
        setTimeout(() => {
            window.location.href = 'googlechrome://' + url.replace(/^https?:\/\//, '');
        }, 500);

        // Попробуем открыть в Firefox
        setTimeout(() => {
            window.location.href = 'firefox://' + url;
        }, 1000);

        // Попробуем открыть в Safari (Safari не имеет явной схемы URL, так что просто оставляем стандартный вариант)
        setTimeout(() => {
            window.location.href = 'x-web-search://?' + url;
        }, 1500);

        // Попробуем открыть в Microsoft Edge
        setTimeout(() => {
            window.location.href = 'microsoft-edge://' + url.replace(/^https?:\/\//, '');
        }, 2000);

        // Попробуем открыть в Opera Touch
        setTimeout(() => {
            window.location.href = 'opera-touch://' + url;
        }, 2500);

        // Если ни один из предыдущих вариантов не сработал, стандартная попытка открыть через Safari
        setTimeout(() => {
            window.location.href = url;
        }, 3000);
    }
};

openInDefaultBrowser();
