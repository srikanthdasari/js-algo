

var DICTIONARY = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789".split("");

const encodeId = (num) => {
    var base = DICTIONARY.length;
    var encoded = '';

    if (num == 0) {
        return DICTIONARY[0];
    }

    while (num > 0) {
        encoded += DICTIONARY[(num % base)];
        num = Math.floor(num / base);
    }

    return reverWord(encoded);
}

const decodeId = (id) => {
    var base = DICTIONARY.length;
    var decoded = 0;
    for (var index = 0; index < id.split("").length; index++) {
        decoded = decoded * base + DICTIONARY.indexOf(id.charAt(index));
    }

    return decoded;
}

const reverWord = (str) => {
    var reverse = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reverse += str.charAt(i);
    }
    return reverse;
}

console.log(encodeId(11231230));
console.log(decodeId('VhU2'));
