export function implementTextarea () {
    let textarea = document.createElement("TEXTAREA");
    textarea.rows = 9;
    textarea.cols = 75;

    textarea.setAttribute('id', 'textarea');

    return textarea;
}

export function typingInTextarea (e, letter, textArea) {
    let letterValue = letter.innerText
    return textArea.value += letterValue 
}