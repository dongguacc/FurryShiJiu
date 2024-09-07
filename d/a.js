window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // 设置开始变化的阈值和结束变化的阈值
    const startThreshold = 100; // 开始变化的滚动距离
    const endThreshold = 200;   // 结束变化的滚动距离

    // 计算透明度和磨砂效果强度
    let opacity = 0;
    let blur = 0;
    if (scrollTop > startThreshold) {
        opacity = (scrollTop - startThreshold) / (endThreshold - startThreshold);
        opacity = Math.min(opacity, 1); // 确保透明度不超过1
        blur = opacity * 10; // 磨砂效果强度，最大为10px
    }

    // 应用透明度和磨砂效果
    navbar.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    navbar.style.backdropFilter = `blur(${blur}px)`;
});
