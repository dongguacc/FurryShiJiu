let currentMenu = null;

document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || 
        (e.ctrlKey && e.key === 's') || 
        ((e.ctrlKey && e.shiftKey && e.key === 'I') || (e.metaKey && e.altKey && e.key === 'I'))) {
        e.preventDefault();
    }
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    
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

    function removeMenu() {
        if (currentMenu) {
            document.body.removeChild(currentMenu);
            currentMenu = null;
        }
        document.removeEventListener('click', removeMenu);
    }

    document.addEventListener('click', removeMenu);
});

function selectAll() {
    document.getSelection().removeAllRanges();
    const range = document.createRange();
    range.selectNodeContents(document.body);
    document.getSelection().addRange(range);
}

function copyText() {
    navigator.clipboard.writeText(document.getSelection().toString()).then(() => {
        console.log('Text copied to clipboard');
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}

function pasteText() {
    navigator.clipboard.readText().then(text => {
        document.execCommand('insertText', false, text);
    }).catch(err => {
        console.error('Could not paste text: ', err);
    });
}
