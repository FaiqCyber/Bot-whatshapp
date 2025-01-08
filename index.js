const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Inisialisasi klien
const client = new Client();

// Menampilkan QR Code di terminal
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

// Ketika bot siap
client.on('ready', () => {
    console.log('Fallbot Ready');
      
    // Kirim pesan otomatis ke kontak tertentu
      const nomorTujuan = '6285877221799@c.us'; // Ganti dengan nomor WhatsApp tujuan
      const pesan = 'hai saya Fallbot, save ya mimin mau push kontak nih 😊';
  
      client.sendMessage(nomorTujuan, pesan)
          .then(() => {
              console.log(`Pesan berhasil dikirim ke ${nomorTujuan}`);
          })
          .catch((err) => {
              console.error('Gagal mengirim pesan:', err);
          });
});

// Respon otomatis untuk pesan masuk
client.on('message', (message) => {
    console.log(`Pesan dari ${message.from}: ${message.body}`);

    // Respon berdasarkan kata kunci
    const pesan = message.body.toLowerCase();

    if (pesan === 'hai') {
        message.reply('Hai! saya Fallbot Ada yang bisa saya bantu? 😊');
    } else if (pesan === 'info') {
        message.reply(' Ketik "menu" untuk melihat opsi lainnya.');
    } else if (pesan === 'terima kasih') {
        message.reply('Sama-sama! makasih telah menghubungi Fallbot 😊');
    } else if (pesan === 'menu') {
        message.reply(
            'menu yang tersedia:\n' +
            '1. Ketik "info" untuk mengetahui info bot.\n' +
            '2. Ketik "help" jika membutuhkan bantuan.\n' +
            '3. Ketik "terima kasih" untuk mencoba respon tambahan.'
        );
    } else if (pesan === 'help') {
        message.reply('Saya adalah bot sederhana. Anda bisa mengetikkan kata kunci seperti "halo", "info", atau "menu".');
    } else {
        message.reply('Maaf, saya tidak mengerti pesan Anda. Ketik "menu" untuk melihat opsi yang tersedia.');
    }
    









});


// Inisialisasi klien
client.initialize();


client.on('error', (error) => {
    console.error('Terjadi kesalahan:', error);
});
