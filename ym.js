/*禁用F12键*/
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12') {
        e.preventDefault();
    }
});

/*禁用Ctrl+S键*/
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
    }
});

/*禁用Ctrl+Shift+I*/
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey && e.shiftKey && e.key === 'I') || (e.metaKey && e.altKey && e.key === 'I')) {
        e.preventDefault();
    }
});

/*自定义右键菜单*/
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    const menu = document.createElement('div');
    menu.style.position = 'absolute';
    menu.style.top = `${e.clientY}px`;
    menu.style.left = `${e.clientX}px`;
    menu.style.backgroundColor = 'white';
    menu.style.border = '1px solid #ccc';
    menu.style.boxShadow = '2px 2px 5px rgba(0,0,0,0.5)';
    menu.style.padding = '5px';
    menu.style.borderRadius = '8px';
    menu.innerHTML = `
        <div style="cursor:pointer;padding:5px;border-radius:4px;" onclick="document.execCommand('selectAll')">全选</div>
        <div style="cursor:pointer;padding:5px;border-radius:4px;" onclick="document.execCommand('copy')">复制</div>
        <div style="cursor:pointer;padding:5px;border-radius:4px;" onclick="document.execCommand('paste')">粘贴</div>
    `;
    document.body.appendChild(menu);

    function removeMenu() {
        document.body.removeChild(menu);
        document.removeEventListener('click', removeMenu);
    }

    document.addEventListener('click', removeMenu);
});
