// Hitung jumlah kata

function hitungJumlahKata(kalimat) {
    kalimat = kalimat.trim();

    const kalimatKata = kalimat.split(/\s+/);

    return kalimatKata.length;
}

const jumlahKata = hitungJumlahKata("Saya suka belajar javascript");
console.log(jumlahKata);