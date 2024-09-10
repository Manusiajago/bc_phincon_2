// Mencari bilangan prima
function cekBilanganPrima(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}


function cariBilanganPrima(n) {
    let hasil = [];


    for (let i = 2; i <= n; i++) {
        if (cekBilanganPrima(i)) {
            hasil.push(i);
        }
    }
    return hasil;
}

const input = prompt("Masukkan bilangan prima: ");
const bilanganPrima = cariBilanganPrima(input);

console.log(bilanganPrima);
