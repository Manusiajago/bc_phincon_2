// Ambil elemen form dan tabel
const form = document.getElementById('formRegis');
const tabelSiswa = document.getElementById('tabelSiswa').getElementsByTagName('tbody')[0];

// Menambahkan event listener pada submit form
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah submit form secara default

    // Ambil value dari input form
    const nama = document.getElementById('namaSiswa').value;
    const kelas = document.getElementById('kelas').value;
    const jenisKelamin = document.querySelector('input[name="gender"]:checked').value;
    const tanggalLahir = document.getElementById('tanggalLahir').value;
    const pendidikan = document.getElementById('pendidikan').value;
    const jurusan = document.getElementById('jurusan').value;

    // Buat baris baru di tabel
    const barisBaru = tabelSiswa.insertRow();

    // Membuat sel setiap kolom
    const namaCell = barisBaru.insertCell(0);
    const kelasCell = barisBaru.insertCell(1);
    const genderCell = barisBaru.insertCell(2);
    const tanggalLahirCell = barisBaru.insertCell(3);
    const pendidikanCell = barisBaru.insertCell(4);
    const jurusanCell = barisBaru.insertCell(5);

    // Masukkan data ke dalam cell
    namaCell.textContent = nama;
    kelasCell.textContent = kelas;
    genderCell.textContent = jenisKelamin;
    tanggalLahirCell.textContent = tanggalLahir;
    pendidikanCell.textContent = pendidikan;
    jurusanCell.textContent = jurusan;

    // Reset form setelah submit
    form.reset();
});
