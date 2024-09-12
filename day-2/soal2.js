// cek tahun kabisat

function periksaTahunKabisat(tahun) {
    if ((0 == tahun % 4) && (0 != tahun % 100) || (0 == tahun % 400)) {
        console.log(tahun + `Adalah tahun kabisat`);
    } else {
        console.log(tahun + `bukan tahun kabisat`);
    }
}

const tahun = prompt(`Masukkan tahun: `)

periksaTahunKabisat(tahun)