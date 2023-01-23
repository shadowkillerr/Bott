/*
===================================================================================================
 █▀▀█ █░▒█ █▀▀▀ █▀▀▀ █▄░▒█   █▀▀▀ █░░░ ▀█▀ █▀▀▀█ █▀▀█
 █░▒█ █░▒█ █▀▀▀ █▀▀▀ █▒█▒█   █▀▀▀ █░░░ ░█░ ▀▀▀▄▄ █▄▄█
 ▀▀█▄ ▀▄▄▀ █▄▄▄ █▄▄▄ █░░▀█   █▄▄▄ █▄▄█ ▄█▄ █▄▄▄█ █░▒█
 
 █▀▀█ ░ █▀▀█ ░ █▀▀█ ░░ █░░▒█
 ░░▀▄ ░ █▄▀█ ░ █▄▀█ ▀▀ ▒█▒█░
 █▄▄█ █ █▄▄█ █ █▄▄█ ░░ ░▀▄▀░
 
 𝑶𝒘𝒏𝒆𝒓 : 𝑴𝒓 𝑵𝒊𝒎𝒂
 𝑯𝒆𝒍𝒑𝒆𝒓𝒔 : 
 • 𝑷𝒂𝒔𝒊𝒅𝒖
 • 𝑻𝒉𝒊𝒏𝒖𝒓𝒂 
 • 𝑻𝒉𝒂𝒔𝒉𝒊
 • 𝑰𝒔𝒖𝒓𝒖

𝑨𝒏𝒅 𝑻𝒉𝒂𝒏𝒌𝒔 𝑭𝒐𝒓 𝑿𝒆𝒐𝒏 𝑭𝒐𝒓 𝒔𝒄𝒓𝒊𝒑𝒕 .
===================================================================================================
*/

const fs = require('fs')
const chalk = require('chalk')



//👇 if you need seen massage use " true "
global.READ_MASSAGE = 'true'
//👇 enable desable Girls Voice Reply
global.VOICE_REPLY =  'true'
// You Bots Owner Number 
global.owner = ['94717069879'] 
//👇 Your Bot Alive Logo ( alive image )
global.alivelogo = `https://i.ibb.co/zfP3kV0/IMG-20220217-081502-038.jpg`
//👇 Your Bot Alive Massage 
global.alive = process.env.ALIVE_MESSAGE || '🍁. *ℍ𝕚 𝕀 𝔸𝕄 𝔸𝕃𝕀𝕍𝔼 ℕ𝕆𝕎* 

🍁. 𝕊ℍ𝔻𝕆𝕎 𝕂𝕀𝕃𝕃𝔼ℝ 𝕎ℍ𝔸𝕋𝕊 𝔸ℙℙ 𝔹𝕆𝕋

🍁. 𝕐𝕆𝕌 ℂ𝔸ℕ 𝔻𝕆𝕎ℕ𝕃𝕆𝔸𝔻 𝔸ℕ𝕐 𝕊𝕆ℕ𝔾𝕊

🍁. 𝔻𝕆 𝕐𝕆𝕌 𝕎𝔸ℕ𝕋 𝔸 𝔻𝕆𝕎ℕ𝕃𝕆𝔸𝔻 𝔸ℕ𝕐 𝕊𝕆ℕ𝔾𝕊...🎷𝕐𝕆𝕌 𝕋𝕐ℙ𝔼 (. 𝕤𝕠𝕟𝕘 𝔻𝕪𝕟𝕒𝕞𝕚𝕥𝕖.)

🍁. 𝕐𝕆𝕌 ℂ𝔸ℕ 𝔻𝕆𝕎ℕ𝕃𝕆𝔸𝔻 𝔸ℕ𝕐 𝕍𝕀𝔻𝔼𝕆𝕊

🍁. 𝔻𝕆 𝕐𝕆𝕌 𝕎𝔸ℕ𝕋 𝔸 𝔻𝕆𝕎ℕ𝕃𝕆𝔸𝔻 𝔸ℕ𝕐 𝕍𝕀𝔻𝔼𝕆𝕊...📹𝕐𝕆𝕌 𝕋𝕐ℙ𝔼 (. 𝕪𝕥𝕔 ℍ𝕠𝕨 𝕥𝕠 𝕞𝕒𝕜𝕖 𝕒 𝕓𝕠𝕥.)

🍁. ℝ𝕌𝕃𝔼𝕊....

🍁. 𝕐𝕆𝕌 ℂ𝔸ℕ'𝕋 𝕊ℙ𝔼𝔸𝕂 𝔹𝔸𝔻 𝕎𝕆ℝ𝔻𝕊.

🍁. ℝ𝔼𝕊ℙ𝔼ℂ𝕋 𝔸𝕃𝕃 𝔸𝔻𝕄𝕀ℕ𝕊

🍁. 𝔻𝕆ℕ'𝕋 𝔾𝕆 𝕋𝕆 𝕋ℍ𝔼 𝔾𝕀ℝ𝕃𝕊 𝕀ℕ𝔹𝕆𝕏𝔼𝕊

🍁. 𝔸ℕ𝔻 𝕐𝕆𝕌 ℂ𝔸ℕ  𝔻𝕆𝕎ℕ𝕃𝕆𝔸𝔻 𝔸ℕ𝕐 𝕀𝕄𝔸𝔾𝔼𝕊 𝔸ℕ𝔻 𝕐𝕆𝕌 ℂ𝔸ℕ 𝕄𝔸𝕂𝔼 𝕃𝕆𝔾𝕆.

🍁.𝕆𝕎ℕ𝔼ℝ : 𝔻𝔸ℍ𝔸𝕄 ℙ𝔸ℕ𝕊𝕀𝕃𝕌.

🍁. 𝔹𝕆𝕋 ℕ𝔸𝕄𝔼 : 𝕊ℍ𝔸𝔻𝕆𝕎 𝕂𝕀𝕃𝕃𝔼ℝ.

🍁. 𝕋ℍ𝔸ℕ𝕂 𝕐𝕆𝕌 𝔸𝕃𝕃 𝔽𝕆ℝ 𝕄𝔼𝕄𝔹𝔼ℝ𝕊.🙏🏻'
//👇 Your Caption ( Image Video )
global.cap = '© 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝚂𝙷𝙰𝙳𝙾𝚆 𝙺𝙸𝙻𝙻𝙴𝚁 𝚆𝙰 𝙱𝙾𝚃 ²⁰²³'
//👇 Do you want show time on your bio use "on" want desable use "off"
global.AUTO_BIO = process.env.AUTO_BIO || 'on'
//👇 Inbox massage block PM block
global.INBOX_BLOCK = process.env.INBOX_BLOCK || 'off'
//👇 Auto react 
global.AUTO_REACT = process.env.AUTO_REACT || 'true'
//👇 Bad word Auto delete ( you must add bad words )
global.ANTI_BADWORD = process.env.ANTI_BADWORD || 'true'
//👇 Your Bot Name
global.botnma = process.env.BOT_NAME || '𝚂𝙷𝙰𝙳𝙾𝚆 𝙺𝙸𝙻𝙻𝙴𝚁 𝚆𝙰 𝙱𝙾𝚃 3 𝛁' 
//👇 Your name
global.ownernma = process.env.OWNER_NAME || 'DAHAM PANSILU' 
//👇 Sticker package name
global.packname = process.env.STICKER_PACK_NAME || '𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝚂𝙷𝙰𝙳𝙾𝚆 𝙺𝙸𝙻𝙻𝙴𝚁 𝚆𝙰 𝙱𝙾𝚃' 
//👇 Sticker Author Name
global.author = process.env.STICKER_AUTHOR_NAME || 'SHADOW KILLER OFC' 
//👇 Kick And Auto Delete Group link Senders
global.antilink = process.env.ANTI_LINK || 'true'
//👇 You Welcome Massage 
global.WELCOME_MSG = '𝚆𝙴𝙻𝙲𝙾𝙼𝙴 𝚃𝙾 𝚂𝙷𝙰𝙳𝙾𝚆 𝙺𝙸𝙻𝙻𝙴𝚁 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙱𝙾𝚃 𝙶𝚁𝙾𝚄𝙿♥️'
//👇 You Good Bye Massage 
global.GOODBYE_MSG = '𝙱𝚈𝙴 𝙱𝚁𝙾𝚃𝙷𝙴𝚁 𝙾𝚁 𝚂𝙸𝚂𝚃𝙴𝚁 𝙷𝙰𝚅𝙴 𝙰 𝙽𝙸𝙲𝙴 𝙳𝙰𝚈♥️'
//👇 Inbox Block Massage 
global.INBOX_BLOCK_MSG = '*INBOX NOT ALLOWED🎳*'
//👇 Send welcome and goodbye massage 
global.SEND_WELCOME = 'true'
//👇 Owner React Imoji
global.OWNER_REACT =  '💻'
global.BAD_KICK_MSG = '*Bad word detect !*'
//👇 URL.button 1 name
global.BUTTON1 = '𝐆𝐈𝐓𝐇𝐔𝐁'
//👇 URL button 2 name
global.BUTTON2 = '𝐘𝐎𝐔𝐓𝐔𝐁𝐄'
//👇 Button 1 url 
global.BUTTON1_URL = 'https://github.com/shadowkillerr'
//👇 Button 2 url
global.BUTTON2_URL = 'https://youtube.com/@user-kt2jq3dw8f'
//👇 Your Add Massage 
global.ADD_MSG = '*✅ Success add Group*' 
//👇 Your Kick Massage 
global.KICK_MSG = '*✅ Success Remove from Group*' 
//👇 Song Download Massage 
global.SONG_DOWN = '⭕ 𝐈 𝐀𝐌 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐈𝐍𝐆 𝐘𝐎𝐔𝐑 𝐒𝐎𝐍𝐆 𝐏𝐋𝐄𝐀𝐒𝐄 𝐖𝐀𝐈𝐓...😁' 
//👇 Song Uplode massage 
global.SONG_UP = '⭕ 𝐈 𝐀𝐌 𝐔𝐏𝐋𝐎𝐀𝐃𝐈𝐍𝐆 𝐘𝐎𝐔𝐑 𝐒𝐎𝐍𝐆 𝐏𝐋𝐄𝐀𝐒𝐄 𝐖𝐀𝐈𝐓...😁'
//👇 212 Number block
global.NUMBER_212_BLOCK = 'true'
//👇 Menu imoji 
global.MENU_IMOJI = '👸|ℹ️'
//👇 Your time zone ( use correct time zone )
global.TIME_ZONE = process.env.TIME_ZONE || 'Asia/Colombo'
//👇 Removebg Api key
global.REMOVE_BG_API = 'nAopWAtDTjP2PduQu1P4teEm'
//👇 Pron Video Download 
global.SEX_VIDEO_DOWNLOAD = process.env.SEX_VIDEO_DOWNLOAD || 'true'
//👇 Change Bot Language 
global.LANG = 'EN'







//MORE
global.zenzapi = '01ABEB1E11'
global.tiktokthub = 'https://i.ibb.co/zfP3kV0/IMG-20220217-081502-038.jpg'
//other
global.pemilik = ['94717069879'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['94717069879'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = 'DAHAM PANSILU' // Your name ඔබේ නම 
global.sessionName = 'session'
global.prefix = ['#','!','/',''] 
global.sp = '🔵'


global.mess = {
    success: '✅ Done!',
    admin: 'you must be admin to use this cmd!',
    botAdmin: 'Bot must be admin !',
    owner: 'This cmd is for Elisa bot owner only',
    group: 'oooh sorry this cmd is for groups only!',
    private: 'it can only used in dms!',
    bot: 'This cmd  its only for the bot host',
    wait: 'Wait Elisa bot processing ',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    




//global api
global.fbapi = 'dd79-1aeb-21a3'
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

global.thumb = fs.readFileSync('./image/Elisa.jpg')
global.imgalive = fs.readFileSync('./image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
