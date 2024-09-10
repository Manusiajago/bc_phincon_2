// ambil elemen
const lampuImg = document.getElementById('lampu');
const toggleButton = document.getElementById('btn-toggle')

// kondisi awal lampu
let isLampuOn = false;

//fungsi untuk toggle gambar lampu
function toggleLampu() {
    if (isLampuOn) {
        lampuImg.src = 'assets/lampu-mati.png';
        toggleButton.textContent = 'Nyalakan lampu'
    } else {
        lampuImg.src = 'assets/lampu-nyala.png';
        toggleButton.textContent = 'Matikan Lampu';
    }

    isLampuOn = !isLampuOn;

}
toggleButton.addEventListener('click', toggleLampu);

