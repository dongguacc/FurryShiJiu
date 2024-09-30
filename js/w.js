
const backgroundVideos = [ /* 背景视频数组 */
    "../src/background/mp4/1.mp4", 
    "../src/background/mp4/2.mp4", 
    "../src/background/mp4/3.mp4",
    "../src/background/mp4/4.mp4"
];

const loadBackgroundVideo = () => { /* 加载随机背景视频函数 */
    const randomIndex = Math.floor(Math.random() * backgroundVideos.length); /* 随机索引 */
    const selectedVideo = backgroundVideos[randomIndex]; /* 选择随机视频 */

    const videoElement = document.getElementById('background-video'); /* 获取视频元素 */
    videoElement.src = selectedVideo; /* 设置视频源 */
};

window.onload = function() { /* 网页加载完成时执行 */
    loadBackgroundVideo(); // 加载随机背景视频
    loadContent(); // 加载外部内容
};

// 当网页向下滑动 40px 出现"返回顶部" 按钮
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    console.log(121);
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// 点击按钮，返回顶部，速度逐渐减慢
function topFunction() {
    const start = document.documentElement.scrollTop || document.body.scrollTop;
    const duration = 800; // 动画持续时间，单位为毫秒
    let startTime = null;

    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // 进度值，范围从 0 到 1

        // 使用减速效果（例如，ease-out）计算当前滚动位置
        const ease = 1 - Math.pow(1 - progress, 3); // 这里是三次方的减速效果
        const scrollToY = start * (1 - ease);

        window.scrollTo(0, scrollToY);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}
