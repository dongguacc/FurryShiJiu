// 检测用户代理并重定向
function redirectBasedOnUA() {
    try {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const currentHref = window.location.href;

        const mobileTarget = 'aa';
        const desktopTarget = 'a';

        if (isMobile) {
            // 如果是手机访问
            if (currentHref !== mobileTarget) {
                window.location.href = mobileTarget;
            }
        } else {
            // 如果是电脑访问
            if (currentHref !== desktopTarget) {
                window.location.href = desktopTarget;
            }
        }
    } catch (e) {
        console.error('重定向检测失败:', e);
    }
}

// 立即执行重定向检测
redirectBasedOnUA();
