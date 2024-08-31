let currentMenu = null;

// 监听键盘事件，阻止特定组合键的默认行为
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || 
        (e.ctrlKey && e.key === 's') || 
        ((e.ctrlKey && e.shiftKey && e.key === 'I') || (e.metaKey && e.altKey && e.key === 'I'))) {
        e.preventDefault();
    }
});

// 监听右键菜单事件，自定义右键菜单
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    
    // 移除之前的菜单
    if (currentMenu) {
        document.body.removeChild(currentMenu);
        currentMenu = null;
    }

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
        <div style="cursor:pointer;padding:5px;border-radius:4px;" onclick="selectAll()">全选</div>
        <div style="cursor:pointer;padding:5px;border-radius:4px;" onclick="copyText()">复制</div>
        <div style="cursor:pointer;padding:5px;border-radius:4px;" onclick="pasteText()">粘贴</div>
    `;
    document.body.appendChild(menu);
    currentMenu = menu;

    // 移除右键菜单的函数
    function removeMenu() {
        if (currentMenu) {
            document.body.removeChild(currentMenu);
            currentMenu = null;
        }
        document.removeEventListener('click', removeMenu);
    }

    document.addEventListener('click', removeMenu);
});

// 全选文本的函数
function selectAll() {
    document.getSelection().removeAllRanges();
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    const range = document.createRange();

    let firstNode = true;
    while (walker.nextNode()) {
        const textNode = walker.currentNode;
        if (textNode.nodeValue.trim() !== '') {
            if (firstNode) {
                range.selectNodeContents(textNode);
                firstNode = false;
            } else {
                range.setEndAfter(textNode);
            }
        }
    }

    document.getSelection().addRange(range);
}

// 复制选中文本的函数
function copyText() {
    navigator.clipboard.writeText(document.getSelection().toString()).then(() => {
        console.log('Text copied to clipboard');
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}

// 粘贴剪贴板内容的函数
function pasteText() {
    navigator.clipboard.readText().then(text => {
        document.execCommand('insertText', false, text);
    }).catch(err => {
        console.error('Could not paste text: ', err);
    });
}
