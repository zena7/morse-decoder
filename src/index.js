const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const decode = (str) => {
  const regexSpace = /[**********]+/g;

  return str
    .match(/.{10}/g)
    .map((item) =>
      item
        .replace(regexSpace, " ")
        .replace(/(10)|(11)/g, (match, ten) => (match === ten ? "." : "-"))
        .replace(/[00]+/, "")
    )
    .reduce(
      (acc, item) => acc.concat(MORSE_TABLE[item] ? MORSE_TABLE[item] : item),
      ""
    );
};



module.exports = {
    decode
}


