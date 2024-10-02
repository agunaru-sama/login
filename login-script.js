document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah form disubmit seperti biasa

  // Anda bisa menambahkan logika validasi di sini (misalnya, cek apakah username dan password sudah diisi)

  // Arahkan pengguna ke halaman anime list
  window.location.href = 'anime-list.html';
});