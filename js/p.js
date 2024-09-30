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

function loadContent() { /* 加载内容函数 */
    const xhr = new XMLHttpRequest(); /* 创建XMLHttpRequest对象 */
    xhr.open('GET', '../w/w.html', true); /* 初始化请求 */
    xhr.onload = function() { /* 当请求加载完成时 */
        if (xhr.status === 200) { /* 如果请求成功 */
            // 创建一个临时 DOM 元素来解析返回的 HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = xhr.responseText; // 将响应文本放入临时元素
            const content = tempDiv.querySelector('#content').innerHTML; // 获取 index.html 中的 #content 内容
            document.getElementById('content').innerHTML = content; // 将内容添加到当前页面的 #content 中
        } else {
            console.error('内容加载失败'); /* 输出错误信息 */
        }
    };
    xhr.send(); /* 发送请求 */
}

window.onload = function() { /* 网页加载完成时执行 */
    loadBackgroundVideo(); // 加载随机背景视频
    loadContent(); // 加载外部内容
    };

if (navigator.userAgent.indexOf("Windows") !== -1 || navigator.userAgent.indexOf("Macintosh") !== -1 || navigator.userAgent.indexOf("Linux") !== -1) {
    // 电脑访问，重定向
    window.location.href = "../w/w.html";
}