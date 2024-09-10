// cek kata palindrom

function cekPalindrom(kata) {

    kata = kata.toLowerCase();

    for (let i = 0; i < Math.floor(kata.length / 2); i++) {
        if (kata[i] !== kata[kata.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

const hasilPalindrom = cekPalindrom('gajah');

if (hasilPalindrom) {
    console.log(true);
} else {
    console.log(false);
}