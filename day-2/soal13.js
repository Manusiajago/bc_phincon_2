// mencari faktor bilangan

function mencariFaktorBilangan(angka) {
    let faktor = [];
    for (let i = 1; i <= angka; i++) {

        if (angka % i === 0) {
            faktor.push(i);
        }
    }

    return faktor;
}

const hasil = mencariFaktorBilangan(12);

console.log(hasil);

