const CONFIG = require('./config.js');
const { client, logAuth } = require('./module/client');
const { Telegram } = require('./Library/telegram');
require('console-stamp')(console, 'HH:MM:ss.l');
const updateNewMessage = require('./update/updateNewMessage')

/*
HSUbot

Hasanudin H Syafaat
@hasanudinhs
banghasan@gmail.com

Support Grup Telegram @botindonesia
*/

// variable tg aku samakan dengan library di GAS
const tg = new Telegram(client)

client
    .on('error', err => {
        console.error('Got error:', JSON.stringify(err, null, 2))
    })
    .on('destroy', () => {
        console.log('Destroy event')
    })


client.on('update', update => {

    // handle debugging
    let debugLog = false
    if (CONFIG.debug.level == 0) {
        // minimalis
    } else if (CONFIG.debug.level == 1) {
        debugLog = '📥 ' + update['_']
    } else if (CONFIG.debug.level == 2) {
        debugLog = update
    } else if (CONFIG.debug.level == 3) {
        debugLog = update
    } else {
        CONFIG.debug.active = false
    }

    if (CONFIG.debug.active && debugLog)
        console.log(JSON.stringify(debugLog, null, 1))


    // tangkap event

    switch (update['_']) {

        case 'updateOption' :
            // dapetin ID dari sini aja
            if (update.name == 'my_id') tg.id = update.value.value
            break;

        case 'updateNewMessage':
            if (!CONFIG.BOT_API && CONFIG.terbaca) tg.viewMessages(update.message.chat_id, update.message.id, true)
            updateNewMessage(tg, update)
            break;

        case 'updateMessageSendSucceeded':
            client.emit('message'+update.old_message_id, update.message)
            break;

        case 'updateFile':
            // sekadar buat dev
            // console.log('RAW',update)

            // console.log(tg.tasks)
            // client.emit('updateFile', update)

            // if (CONFIG.debug.active) console.log('receive updateFile file_id=' + update.file.id, update);
            break

        case 'updateConnectionState':
            break;

        default:
            break;
    }
})

async function main() {
    await client.connect()
    await client.login(() => logAuth);
}

main()
