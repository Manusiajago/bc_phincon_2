// Hitung bilangan faktorial

function hitungFaktorial(n) {
    if (n <= 1) {
        return 1;
    }

    return n * hitungFaktorial(n - 1);
}

console.log(hitungFaktorial(5));
console.log(hitungFaktorial(0));