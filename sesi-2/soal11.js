function hitungRataRata(angkaArray) {
    if (angkaArray.length === 0) {
        return 'Array kosong';
    }

    let total = 0;
    for (let i = 0; i < angkaArray.length; i++) {
        total += angkaArray[i];
    }


    const rataRata = total / angkaArray.length;
    return rataRata;
}


const angka = [1, 2, 3, 4, 5];
const rataRata = hitungRataRata(angka);
console.log(`Rata-rata: ${rataRata}`); 
