// Ambil elemen tombol
const addColumnBtn = document.getElementById('addColumnBtn');
// Ambil tabel dan headernya
const table = document.getElementById('addTable');
const thead = table.querySelector('thead tr');
const tbody = table.querySelector('tbody');

// Fungsi untuk menambah kolom
function tambahKolom() {
    // Tambahkan header kolom baru
    const th = document.createElement('th');
    th.textContent = '';
    thead.appendChild(th);

    // Tambahkan data kolom baru ke setiap baris di tbody
    const rows = tbody.querySelectorAll('tr');
    rows.forEach(row => {
        const td = document.createElement('td');
        td.textContent = ''; // Anda bisa mengganti dengan data sesuai kebutuhan
        row.appendChild(td);
    });
}

// Tambahkan event listener untuk tombol
addColumnBtn.addEventListener('click', tambahKolom);