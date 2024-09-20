// background.js
const backgroundVideos = [
    "src/background/mp4/1.mp4", 
    "src/background/mp4/2.mp4", 
    "src/background/mp4/3.mp4",
    "src/background/mp4/4.mp4"
];

window.onload = function() {
    const randomIndex = Math.floor(Math.random() * backgroundVideos.length);
    const selectedVideo = backgroundVideos[randomIndex];

    const videoElement = document.getElementById('background-video');
    videoElement.src = selectedVideo;

    if (window.innerWidth < 1200) {
        window.location.href = "p.html";
    }
};
