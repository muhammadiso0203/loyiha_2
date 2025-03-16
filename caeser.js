class CaesarCipher {
    constructor(shift) {
        this.shift = shift;
    }

    encode(text) {
        return text.split('').map(char => this.shiftChar(char, this.shift)).join('');
    }

    decode(text) {
        return text.split('').map(char => this.shiftChar(char, this.shift)).join('');
    }

    shiftChar(char, shift) {
        const isUpperCase = char >= 'A' && char <= 'Z';
        const isLowerCase = char >= 'a' && char <= 'z';

        if (!isUpperCase && !isLowerCase) {
            return char;
        }

        const base = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
        const charCode = char.charCodeAt(0);
        const newCharCode = ((charCode - base + shift + 26) % 26) + base;

        return String.fromCharCode(newCharCode);
    }
}

var c = new CaesarCipher(6);
console.log(c.encode('Iodewarw')); // 'HTIJBFWX'
console.log(c.decode('BFKKQJX')); // 'WAFFLES'