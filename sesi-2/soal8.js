// cari bilangan fibonacci

function deretFibonacci(n) {
    let fibonnaci = [];

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fibonnaci.push(0);
        } else if (i === 1) {
            fibonnaci.push(1);
        } else {
            fibonnaci.push(fibonnaci[i - 1] + fibonnaci[i - 2]);
        }
    }

    return fibonnaci;
}

const hasil = deretFibonacci(8);
console.log(hasil)