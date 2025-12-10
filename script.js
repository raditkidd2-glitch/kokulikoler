console.log("Script.js berhasil dimuat!");

// Contoh fungsionalitas yang lebih kompleks
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah pengiriman formulir default

    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;

    if (nama && email) {
        alert(`Terima kasih, ${nama}! Pesan Anda telah dikirim (secara simulasi).`);
        this.reset(); // Mengatur ulang formulir
    } else {
        alert("Mohon isi semua kolom yang diperlukan.");
    }
});