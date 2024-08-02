//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "94719110632";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib05mSlZhY2VSZlB5NWx6cC9PM0h5RW44L3RRWWhSc2NhZm9lNEpzNjhFdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWWlKUlZ5TmhzYUpVcW9YQnYxaU80azBzMFJPdDVodnJtcUhmNmpYUFNDYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0Q0pnbjMzeFNtbXUwc3oreUhPUVgweUg3bm8zaUVDVDVEN3FxMFZQRDNrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIeVAxRnFUUytvcE9hWWpsL1pKRjVHS0k2M0RSZ2pWWk4vRTBhTFRucWtJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklKcG95SFprSFVSTGpPUUl3a05JaEE3aTdLa1ZvOHpmSTVMZFpuell6RTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklsdWljM1JTTm15UDNhSk5pYkYzb082WVZzeFgwUDFlNFJsYkhJZmdFMW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUFaVGdMTmVKbFpVYzN4ZWFnUEFEOXZZOFF2ZXlsZWhGcE9hMVl0ZW1IST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR3N5eHdmNWI4OEF3K1JKRk56MDk1b0NUUkQ4UEg5cnJSTDJjaVZYelFDOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFFdkpTQ1ZVNDFhN1BWWE9Ec2xabnBZT1pWN3dSVjdySGRQamphOFJlNHIvWFJGMGVURFA3UGJpUUZNYmdFLzlxbUZJY0hLL3YzdXlIeVpUMi9KRmhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzksImFkdlNlY3JldEtleSI6Ii9WaE8wcTNHTi9RRnJHTHFaVTk5aVhLOFpPMkxzSGdkVU13RXAzbXNWQlE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjA0Njg0NTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNEIxQjFFQTYzQTlDQjc4RTg4MTZFQTU3ODVCNkE3OEQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjYwNzYwMn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjA0Njg0NTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMkFCMjNCNTk2MEQ1MUU4NjFBNUE2Rjg2RDM3RkVCMjkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjYwNzYwMn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjA0Njg0NTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQ0M1QzI1MEEzMUQzMEE4QkVCMkY2QzkxRUE0RTQ1MTQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjYwNzYwNX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjA0Njg0NTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTZFRjE2QTBCQ0UzM0ZFODE3Q0NEMTRERTMyMUExQTQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjYwNzYwNX1dLCJuZXh0UHJlS2V5SWQiOjYxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6NjEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTmJYVXR1WTlTcUN1bk9qa1ZfdVdPUSIsInBob25lSWQiOiI4NmI3NGQ4Mi02NjI0LTQ4ZWItYmI0MS05ZTg4ZTJlYjM4NWUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYnBFRndsK21yTmJpblZuc3hkUXBUOXo0OURBPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkU4eERTeWdpeWh3L3BDWGdCSEhXK0ZBVm9LMD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI4Rjk2QTY1RyIsIm1lIjp7ImlkIjoiOTQ3NjA0Njg0NTc6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJOYWR1biBUaGVqYW5hIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLYmJ1SWNGRU9UUHM3VUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJwQ1F2M0dDVEUxcm5tejdlTG9tbjJ4WndrNk9WRmd1QzZwWERqTEJKcHg0PSIsImFjY291bnRTaWduYXR1cmUiOiJoOVJBZzA2ZnUrdlE2MkJrN2FhV0wvTndCNG5weU0waEhZdnF2d1QwdHVtNU5pb2gxc0JnVEx6M2NTU056MTdNaVk0M2ZaZGpsQTF2WUloeHNMVDNCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVXFVMXdqOFBzK0phSUFESkhSekdkdStuSnJHeUVkdS91c09xYVlnNWloQXJVbk9rcUJMOHVPdGwyUWpzSG94R1ZRdm15WjNIWnVhemZaV3AzajgwakE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2MDQ2ODQ1NzoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFRa0w5eGdreE5hNTVzKzNpNkpwOXNXY0pPamxSWUxndXFWdzR5d1NhY2UifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI2MDc2MDAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRWlqIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "NADUN-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "NADUN",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
