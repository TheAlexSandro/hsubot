const plugin = require('./plugins.conf')

module.exports = {
  // di dapat dari https://my.telegram.org/
  API_ID: 19443896,
  API_HASH: '28ceca141564614d8a5e13a210913327',

  // aktifkan jika pakai bot API
  // jika bot API aktif, userbot otomatis OFF
  BOT_API: false,
  // token bot API dari @botfather, HANYA jika BOT_API true
  BOT_TOKEN: '',

  // jika konek dengan nomor hp
  // pake tipe string, format internasional 628xxxxxxx

  phone: '6285784297549', // ini contoh saja, ganti dengan yang sesuai

  // path TDLib
  pathTDLib: './tdlib/libtdjson.so',

  // untuk verbose mode
  debug: {
    active: true,
    level: 0 // 0 minimalis, 1 event only, 2 detail, 3 semua termasuk object dan fungsi
  },

  admin:
  {
    active: true, // <-- aktifkan jika ingin membatasi bot dipergunakan oleg admin saja

    // jika skipme false, dan admin true.. id bot harus dimasukkan di sini. 
    // Amannya sih masukkan saja, kawatir berubah pikiran trus lupa ngisinya
    id: [
      1434949478, // <- ganti ini ke ID kamu
    ],
  },

  // detail aplikasi

  // override plugins status, liat file pluginConfig.js
  plugins: plugin.status,

  // untuk keperluan plugins
  base: {
    uploadPath: '',
  },

  // userbot: jika true, maka pesan ditandai terbaca
  terbaca: true,

  // aktifkan jika pesan sendiri tidak ingin diproses
  skipMe: true,
  skipMessage: true, // jika true, pas launching bot pesan lama ga akan direspon
}
