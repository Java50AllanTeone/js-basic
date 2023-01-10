
function getHtmlUl(array) {
    const arrLi = [];

    if (!Array.isArray(array) || !isValid(array)) {
        return 'array is not valid';
    }

    for (let i = 0; i < array.length; i++) {
        const classStr = array[i] == 0 ? 'white' : 'black';
        arrLi.push(`<li class="item_class"><div class="${classStr}"> </div></li>`);
    }
    
    return `<ul class="list_class">${arrLi.join('')}</ul>`;
}

function isValid(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0 && array[i] !== 1) {
            return false;
        }
    }
    return true;
}