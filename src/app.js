import {addHeader, addDescription} from './text';
import {implementTextarea} from './textarea';
import {renderKeyboard} from './keyboard';
import {rows} from './variables';

import "../styles/style.scss";

export let space = document.querySelector('#Space');
export let leftShift = document.querySelector('LShift');
export let rightShift = document.querySelector('Rshift');
export let capsLock = document.querySelector('CapsLock');
export let body = document.querySelector('body');
export let textArea = document.querySelector('#textarea');

document.addEventListener("DOMContentLoaded", () => {
    
    const BODY = document.querySelector('body');
    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    BODY.prepend(wrapper);
    let title = addHeader();

    wrapper.append(title);
    let textarea = implementTextarea();
    wrapper.append(textarea);
    let keyboard = renderKeyboard(rows);
    wrapper.append(keyboard);
    let description = addDescription();
    wrapper.append(description);

    let keys = document.querySelectorAll('.key');
    let space = document.querySelector('#Space');
    let leftShift = document.querySelector('#LShift');
    let rightShift = document.querySelector('#RShift');
    let capsLock = document.querySelector('#CapsLock');
    let body = document.querySelector('body');
    let textArea = document.querySelector('#textarea');
    let leftCtrl = document.querySelector('#LCtrl');
    let rightCtrl = document.querySelector('#RCtrl');
    let leftAlt = document.querySelector('#LAlt')
    let rightAlt = document.querySelector('#RAlt')
    
    window.addEventListener('keydown', function(e) {
    
        
        for (let i = 0; i < keys.length; i++) {
           
           if (e.key == keys[i].getAttribute("rus-value") || e.key == keys[i].getAttribute("rus-Shiftvalue") || e.key == keys[i].getAttribute("eng-value") || e.key == keys[i].getAttribute("eng-Shiftvalue") || e.key == keys[i].getAttribute("keyName")){
            

            if (e.code == 'CapsLock') {
               
               capsLock.classList.toggle('active');

            } else {
                
                keys[i].classList.add('active');
            }

           }
           
           if (e.code == 'Space') {
               space.classList.add('active');

           }
           
            if (e.code == 'ShiftLeft') {
                if (keys[i].textContent == keys[i].getAttribute("rus-value") && !capsLock.classList.contains('active')) {
                    keys[i].textContent = keys[i].getAttribute("rus-Shiftvalue");
                }
               
               rightShift.classList.remove('active');
           }
           if (e.code == 'ShiftRight') {
               
                leftShift.classList.remove('active');
            }
            if (e.code == 'ControlLeft') {
               
                rightCtrl.classList.remove('active');
            }
            if (e.code == 'ControlRight') {
                
                 leftCtrl.classList.remove('active');
             }
             if (e.code == 'AltLeft') {
               
                rightAlt.classList.remove('active');
            }
            if (e.code == 'AltRight') {
                
                 leftAlt.classList.remove('active');
             }
             console.log(e.code);
            if (e.code == 'ControlLeft' && e.code == 'AltLeft') {
                console.log('lol')
                if (keys[i].textContent == keys[i].getAttribute("rus-value") && !capsLock.classList.contains('active')) {
                    keys[i].textContent = keys[i].getAttribute("eng-value");
                }
            }
           
           
           
        }
    })

    window.addEventListener('keyup', function(e) {
    
        
        for (let i = 0; i < keys.length; i++) {
           
           if (e.key == keys[i].getAttribute("rus-value") || e.key == keys[i].getAttribute("rus-Shiftvalue") || e.key == keys[i].getAttribute("eng-value") || e.key == keys[i].getAttribute("eng-Shiftvalue") || e.key == keys[i].getAttribute("keyName")) {
            if (e.code !== 'CapsLock') {
            keys[i].classList.remove('active');
            }
           };
           if (e.code == 'Space') {
            space.classList.remove('active');
        }
        if (e.code == 'ShiftLeft') {
            if (keys[i].textContent == keys[i].getAttribute("rus-Shiftvalue") && !capsLock.classList.contains('active')) {
                keys[i].textContent = keys[i].getAttribute("rus-value");
            }
           
           
       }
       if (e.code == 'ShiftRight') {
            if (keys[i].textContent == keys[i].getAttribute("rus-Shiftvalue") && !capsLock.classList.contains('active')) {
                keys[i].textContent = keys[i].getAttribute("rus-value");
        }
        }
        if (e.code == 'ControlLeft') {
           
            
        }
        if (e.code == 'ControlRight') {
            
             
         }
         if (e.code == 'AltLeft') {
           
            
        }
        if (e.code == 'AltRight') {
            
             
         }
           
           
        }
    })

})




