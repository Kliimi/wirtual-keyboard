const NUMBERS_ROW = [
    {rus: {value: 'ё', shiftValue: '`'}, eng: {value: '`', shiftValue: '~'}},
    {rus: {value: '1', shiftValue: '!'}, eng: {value: '1', shiftValue: '!'}},
    {rus: {value: '2', shiftValue: '"'}, eng: {value: '2', shiftValue: '@'}},    
    {rus: {value: '3', shiftValue: '№'}, eng: {value: '3', shiftValue: '#'}},
    {rus: {value: '4', shiftValue: ';'}, eng: {value: '4', shiftValue: '$'}},
    {rus: {value: '5', shiftValue: '%'}, eng: {value: '5', shiftValue: '%'}},
    {rus: {value: '6', shiftValue: ':'}, eng: {value: '6', shiftValue: '^'}},
    {rus: {value: '7', shiftValue: '?'}, eng: {value: '7', shiftValue: '&'}},
    {rus: {value: '8', shiftValue: '*'}, eng: {value: '8', shiftValue: '*'}},
    {rus: {value: '9', shiftValue: '('}, eng: {value: '9', shiftValue: '('}},
    {rus: {value: '0', shiftValue: ')'}, eng: {value: '0', shiftValue: ')'}},
    {rus: {value: '-', shiftValue: '_'}, eng: {value: '-', shiftValue: '_'}},
    {rus: {value: '=', shiftValue: '+'}, eng: {value: '=', shiftValue: '+'}}, 
]
const LETTERS = [
     [
    {rus: 'й', eng: 'q'},
    {rus: 'ц', eng: 'w'},
    {rus: 'у', eng: 'e'},
    {rus: 'к', eng: 'r'},
    {rus: 'е', eng: 't'},
    {rus: 'н', eng: 'y'},
    {rus: 'г', eng: 'u'},
    {rus: 'ш', eng: 'i'},
    {rus: 'щ', eng: 'o'},
    {rus: 'з', eng: 'p'},
    {rus: 'х', eng: { value:'[', shiftValue: '{'}},
    {rus: 'ъ', eng: { value:']', shiftValue: '}'}}, 
    ],

    [
    {rus: 'ф', eng: 'a'},
    {rus: 'ы', eng: 's'},
    {rus: 'в', eng: 'd'},
    {rus: 'а', eng: 'f'},
    {rus: 'п', eng: 'g'},
    {rus: 'р', eng: 'h'},
    {rus: 'о', eng: 'j'},
    {rus: 'л', eng: 'k'},
    {rus: 'д', eng: 'l'},
    {rus: 'ж', eng: {value: ';', shiftValue: ':'}},
    {rus: 'э', eng: {value: "'", shiftValue: '"'}},
    {rus: {value: '\\', shiftValue: '/' }, eng: {value: '\\', shiftValue: '/' }}, 
    ],

    [
    {rus: {value: '\\', shiftValue: '/' }, eng: {value: '\\', shiftValue: '/' }},
    {rus: 'я', eng: 'z'},
    {rus: 'ч', eng: 'x'},
    {rus: 'с', eng: 'c'},
    {rus: 'м', eng: 'v'},
    {rus: 'и', eng: 'b'},
    {rus: 'т', eng: 'n'},
    {rus: 'ь', eng: 'm'},
    {rus: 'б', eng: {value: ',', shiftValue: '<'}},
    {rus: 'ю', eng: {value: '.', shiftValue: '>'}},
    {rus: '.', eng: {value: '/', shiftValue: '?'}}, ]

    
]

const SPECIAL_KEYS = [
    
    {funcKey: "Backspace", id: 'Backspace', attribute: 'Backspace'},
    {funcKey: 'Tab', id: 'Tab', attribute: 'Tab'},
    {funcKey: 'Del', id: 'Delete', attribute: 'Delete'},
    {funcKey: 'CapsLock', id: 'CapsLock', attribute: 'CapsLock'},
    {funcKey: 'Enter', id: 'Enter', attribute: 'Enter'},
    {funcKey: 'Shift', id: 'LShift', attribute: 'Shift'},
    {funcKey: '▲', id: 'Up', attribute: 'ArrowUp'},
    {funcKey: 'Shift', id: 'RShift', attribute: 'Shift'},
    {funcKey: 'Ctrl', id: 'LCtrl', attribute:'Control'},
    {funcKey: 'Win', id: 'Meta', attribute: 'Meta'},
    {funcKey: 'Alt', id: 'LAlt', attribute: 'Alt'},
    {funcKey: '    ', id: 'Space', attribute: 'space'},
    {funcKey: 'Alt', id: 'RAlt', attribute: 'Alt'},
    {funcKey: '◄', id: 'Left', attribute:'ArrowLeft'},
    {funcKey: '▼', id: 'Down', attribute:'ArrowDown'},
    {funcKey: '►', id: 'Right', attribute: 'ArrowRight'},
    {funcKey: 'Ctrl', id: 'RCtrl', attribute: 'Control'},
]

export let rows = [ [...NUMBERS_ROW, SPECIAL_KEYS[0]],
             [SPECIAL_KEYS[1], ...LETTERS[0], SPECIAL_KEYS[2]],
             [SPECIAL_KEYS[3], ...LETTERS[1], SPECIAL_KEYS[4]],
             [SPECIAL_KEYS[5], ...LETTERS[2], SPECIAL_KEYS[6], SPECIAL_KEYS[7]],
             [...SPECIAL_KEYS.slice(8)]        
]



