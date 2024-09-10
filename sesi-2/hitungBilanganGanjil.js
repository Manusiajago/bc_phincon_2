// hitung jumlah bilangan ganjil

function hitungBilanganGanjil(n) {
    let count = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            count++;
        }
    }

    return count;
}

const input = 10;
console.log(`Jumlah bilangan ganjil dari 1 sampai ${input} adalah `, hitungBilanganGanjil(input))