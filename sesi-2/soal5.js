//  soal 5 hitung jumlah digit

function hitungJumlahDigit(angka) {
    // convert angka ke str
    const strAngka = angka.toString();

    let total = 0;

    for (let i = 0; i < strAngka.length; i++) {
        total += parseInt(strAngka[i], 10);
    }

    return total;
}

const angka = 12345;

console.log(hitungJumlahDigit(angka))