## History

Log history dari versi developtment

### v0.3

`18 April 2021`

+ [.3] NOW: plugins-able!
+ [.3.3] TGLib v1.1: send - Photo, Doc, Video, Sticker, Audio, Voice
+ [.3.5] config: terbaca, skipme
+ [.3.6] TGLib v1.2: sendAction, getMessage.
+ [.3.6] Firmware: example sendAction impl. file

`19 April 2021`

+ [.3.7] Config: overide status plugins. Update Example Config.
+ [.3.7] Plugins: +upload (Foto, Video, Doc, dll), +bash
+ [.3.7] Helper: bug fixes
+ [.3.7] TGLib v1.2.1: bug fix, fileType untuk localFileinput

`20 April 2021`

+ [.3.8] Login nomor jadi bersih, set debug level ke `0`. Jika ingin mendebug, naikkan levelnya.
+ [.3.8] Config: Debug level bereffect ke verbosityLevel
+ [.3.8] Membersihkan file tidak dipakai
+ [.3.9] Load plugins dipengaruhi level debug
+ [.3.9] Config: input nomor hp dari sini

`21 April 2021`

+ [.3.11] TGLib 1.3: handle diganti client, +getRemoteFile, +downloadFile
+ [.3.11] Plugins: .pong dengan responsif time

`22 April 2021`
+ [.3.12] TGLib v1.4: menambahkan id, sekaligus mengganti mendapatkan metode `userbot_id` pada proses update
+ [.3.12] TGLib v1.4: getFile, destroy, joinChat
+ [.3.12] Config: skipMessage, jika true pas launching bot pesan lama ga akan diproses


`24 April 2021`

+ [.3.13] Plugins: bugfix getUser

`25 April 2021`

+ [.3.13] **Plugins** pong, satuan diubah jadi detik
+ [.3.14] **Plugins** +start
+ [.3.14] **updateNewMessage** cek status helper
+ [.3.14] rename configPlugins ke plugins.conf
+ [.3.14] **Plugins** rename uploadName dengan upName, perbaikan getMe
+ [.3.14] TGLib v1.4.1: getChat, getChats, getChatList
+ [.3.14] **Plugins** `user` .chatlist

### v0.2 a

`17 April 2021`

+ Lib `Telegram` ditambahkan fowardMessage, sendMessage support entities dan reply
+ `main` dan `botapi` diperbaiki, digabungkan mengakses pada `./update`
+ memisahkan folder userbot dan botapi
+ dijadiin satu semua ada pada `main.js`
+ [.2.5] pin/unpin/unPinAll message, perpendek variable message, userbot: viewed message
+ [.2.6] stats

### v0.1 a

`15 April 2021`

Rilis awal