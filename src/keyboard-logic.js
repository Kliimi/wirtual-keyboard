export function shiftDown (e, capsLock, leftShift, rightShift, changedKeys) {
    if (!capsLock.classList.contains('active')) {
            changedKeys.forEach( item => { item.innerHTML = item.getAttribute(`${localStorage.getItem('lang')}-shiftvalue`)})
        } else {
            changedKeys.forEach( item => { item.innerHTML = item.getAttribute(`${localStorage.getItem('lang')}-value`)})
            
        }
    
}

export function shiftUp (e, capsLock, leftShift, rightShift, changedKeys) {
    
    if (leftShift.classList.contains('active') || leftShift.classList.contains('active') || e.target.getAttribute('keyname') == 'Shift') {
     
    if (!capsLock.classList.contains('active')) {
        changedKeys.forEach( item => { item.innerHTML = item.getAttribute(`${localStorage.getItem('lang')}-value`)})
        
        
    } else {
        changedKeys.forEach( item => { item.innerHTML = item.getAttribute(`${localStorage.getItem('lang')}-shiftvalue`)})
    }
}

}
export function toggleCapsLock (e, capsLock, changedKeys) {
    
    if (changedKeys[13].innerHTML == changedKeys[13].getAttribute(`${localStorage.getItem('lang')}-value`)) {
        changedKeys.forEach( item => { item.innerHTML = item.getAttribute(`${localStorage.getItem('lang')}-shiftvalue`)})
    } else {
        changedKeys.forEach( item => { item.innerHTML = item.getAttribute(`${localStorage.getItem('lang')}-value`)})
        
    }
}
export function changeLang (changedKeys, leftCtrl, leftAlt, capsLock) {
    
    if (
        leftCtrl.classList.contains("active") &&
        leftAlt.classList.contains("active")
      ) {
        
        if (
            localStorage.getItem('lang') == 'rus'
        ) {
            
            localStorage.removeItem('lang');
            localStorage.setItem('lang', 'eng');
            
            if (capsLock.classList.contains('active') ) {
                changedKeys.forEach( item => item.innerHTML = item.getAttribute(`${localStorage.getItem('lang')}-shiftvalue`));
            } else {
                changedKeys.forEach( item => item.innerHTML = item.getAttribute(`${localStorage.getItem('lang')}-value`));
            }
          
        } 
        else if (
            localStorage.getItem('lang') == 'eng'
        ) {
            localStorage.removeItem('lang');
            localStorage.setItem('lang', 'rus');
            if (capsLock.classList.contains('active')) {
                changedKeys.forEach( item => item.innerHTML = item.getAttribute(`${localStorage.getItem('lang')}-shiftvalue`));
            } else {
                changedKeys.forEach( item => item.innerHTML = item.getAttribute(`${localStorage.getItem('lang')}-value`));
            }
        }
      }
      
}


