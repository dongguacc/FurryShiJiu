document.addEventListener('keydown', function(event) {
    // 阻止 Ctrl + S
    if (event.ctrlKey && (event.key === 's' || event.code === 'KeyS')) {
        event.preventDefault();
        console.log('Ctrl + S 被禁用');
    }

    // 阻止 Ctrl + Shift + I
    if (event.ctrlKey && event.shiftKey && (event.key === 'i' || event.code === 'KeyI')) {
        event.preventDefault();
        console.log('Ctrl + Shift + I 被禁用');
    }

    // 阻止 F12（开发者工具）
    if (event.keyCode == 123) {
        event.preventDefault();
        console.log('F12 被禁用');
    }
});

// 禁用右键菜单
document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // 阻止默认的右键菜单
    console.log('右键菜单已禁用');
});

// 禁用长按保存功能
document.addEventListener('touchstart', function(event) {
    event.preventDefault(); // 阻止长按事件
    console.log('长按保存功能已禁用');
});
