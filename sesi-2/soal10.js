//  fungsi mencari bilangan terbesar

function cariBilanganTerbesar(...arr) {
    return Math.max.apply(null, arr);
}

const hasil = cariBilanganTerbesar(3, 7, 2, 9, 1);

console.log(hasil);