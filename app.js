const lotinText = document.querySelector("#lotin");
const kirilText = document.querySelector("#kiril");
const btnLotin = document.querySelector(".btn-lot");
const btnKiril = document.querySelector(".btn-kir");
const resultLotin = document.querySelector(".result-lotin");
const resultKiril = document.querySelector(".result-kiril");
const btnCopyLotin = document.querySelector(".btn-c-lot");
const btnCopyKiril = document.querySelector(".btn-c-kir");

let lotin = `ABDEFGHIJKLMNOPQRSTUVXYZ abdefghijklmnopqrstuvyxz.,'"`;
let kiril = `АБДЭФГҲИЖКЛМНОПҚРСТУВХЙЗ абдэфгҳижклмнопқрстувйхз.,'"`;
let lotinArr = [
    "A",
    "B",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "X",
    "Y",
    "Z",
    " ",
    "a",
    "b",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "y",
    "x",
    "z",
    ".",
    ",",
    "G'",
    "O'",
    "Sh",
    "Ch",
    "g'",
    "o'",
    "sh",
    "ch",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "}",
    "{",
    "]",
    "[",
    "/",
    "'",
    '"',
    ":",
    ";",
    "<",
    ">",
    "?",
];
let kirilArr = [
    "A",
    "Б",
    "Д",
    "Э",
    "Ф",
    "Г",
    "Ҳ",
    "И",
    "Ж",
    "К",
    "Л",
    "М",
    "Н",
    "О",
    "П",
    "Қ",
    "Р",
    "С",
    "Т",
    "У",
    "В",
    "Х",
    "Й",
    "З",
    " ",
    "а",
    "б",
    "д",
    "э",
    "ф",
    "г",
    "ҳ",
    "и",
    "ж",
    "к",
    "л",
    "м",
    "н",
    "о",
    "п",
    "қ",
    "р",
    "с",
    "т",
    "у",
    "в",
    "й",
    "х",
    "з",
    ".",
    ",",
    "Ғ",
    "Ў",
    "Ш",
    "Ч",
    "ғ",
    "ў",
    "ш",
    "ч",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "}",
    "{",
    "]",
    "[",
    "/",
    "'",
    '"',
    ":",
    ";",
    "<",
    ">",
    "?",
];

btnLotin.addEventListener("click", () => {
    let x = lotinText.value;
    lotinKiril(x);
});

function lotinKiril(text) {
    let textArr = [];
    for (let i = 0; i < text.length; i++) {
        let a = text[i];
        let b = lotin.indexOf(a);
        textArr.push(b);
    }
    let textStr = "";
    for (let i = 0; i < textArr.length; i++) {
        let a = kiril[textArr[i]];
        textStr += a;
    }
    resultLotin.value = textStr;
}

btnKiril.addEventListener("click", () => {
    let x = kirilText.value;
    kirilLotin(x);
});

function kirilLotin(text) {
    let textArr = [];
    for (let i = 0; i < text.length; i++) {
        let a = text[i];
        let b = kiril.indexOf(a);
        textArr.push(b);
    }
    let textStr = "";
    for (let i = 0; i < textArr.length; i++) {
        let a = lotin[textArr[i]];
        textStr += a;
    }
    resultKiril.value = textStr;
}

btnCopyLotin.addEventListener("click", ()=>{
    copyText = resultLotin
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    btnCopyLotin.innerHTML = "Copied..."
    setTimeout(()=>{
        btnCopyLotin.innerHTML = "Copy"
    },2000)
})

btnCopyKiril.addEventListener("click", ()=>{
    copyText = resultKiril
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    btnCopyKiril.innerHTML = "Copied..."
    setTimeout(()=>{
        btnCopyKiril.innerHTML = "Copy"
    },2000)
})