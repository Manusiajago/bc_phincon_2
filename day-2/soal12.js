function hitungJumlahVokal(kata) {

    const vokal = 'aeiouAEIOU';
    let jumlahVokal = 0;

    for (let i = 0; i < kata.length; i++) {

        if (vokal.includes(kata[i])) {
            jumlahVokal++;
        }
    }

    return jumlahVokal;
}

const hasil = hitungJumlahVokal("javascript");
console.log(hasil); 
