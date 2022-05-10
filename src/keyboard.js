

function renderFuncKeys (keyobject) {
    let key = document.createElement('div');
    key.classList.add('key', 'functional-key');
    key.setAttribute('keyName', keyobject.attribute);
    key.id = keyobject.id;
    key.innerHTML = keyobject.funcKey; 
    if (keyobject.id === 'Space') key.classList.remove('functional-key');

    return key;
}
function  renderKeys (keyobject) {
    
    let key = document.createElement("div");
    key.classList.add('key', 'simple-key', 'change-key');
     localStorage.setItem('lang', 'rus');
     
    
    if (keyobject.rus.value) {
        key.setAttribute("rus-value", keyobject.rus.value);
        key.textContent = keyobject.rus.value;
    } else {
        key.setAttribute("rus-value", keyobject.rus);
        key.textContent = keyobject.rus;
    }

    
    if (keyobject.rus.shiftValue) {
        key.setAttribute("rus-shiftValue", keyobject.rus.shiftValue);
    } else {
        key.setAttribute("rus-shiftValue", keyobject.rus.toUpperCase());
    }

    if (keyobject.eng.value) {
        key.setAttribute("eng-value", keyobject.eng.value);
    } else {
        key.setAttribute("eng-value", keyobject.eng);
    }

    if (keyobject.eng.shiftValue) {
        key.setAttribute("eng-shiftValue", keyobject.eng.shiftValue);
    } else {
        key.setAttribute("eng-shiftValue", keyobject.eng.toUpperCase());
    }
    
    
    
    
    return key;
    

}
function renderRows (rowArr) {
    let row = document.createElement('div');
    row.classList.add('keyboard__row');
    for (let i = 0; i < rowArr.length; i++) {
        
        if (rowArr[i].funcKey) {
            let fKey = renderFuncKeys(rowArr[i])
            row.append(fKey);
        } else {
            let key = renderKeys(rowArr[i]);
            row.append(key);
        }
    }
    return row;
}

export function renderKeyboard (rowsArr) {
    
    let keyboardWrapper = document.createElement('div');
    keyboardWrapper.classList.add('keyboard');
    
    for (let i = 0; i < rowsArr.length; i++) {
        
        let row = renderRows(rowsArr[i]);
        keyboardWrapper.append(row);
    }

    return keyboardWrapper;
}