(function() {
    // 获取用户代理字符串
    var userAgent = navigator.userAgent;

    // 正则表达式检测手机设备
    var isMobile = /iPhone|iPad|iPod|Android|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    if (isMobile) {
        // 如果是手机设备，重定向
        window.location.href = "/No-cell-phones.html";
    }
    // 如果是电脑，则继续访问，不做任何操作
})();
