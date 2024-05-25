const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_34_05_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1LFxuICAgICAgICA2OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTcyLFxuICAgICAgICA3NixcbiAgICAgICAgMjE1LFxuICAgICAgICA5MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMSxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTU5LFxuICAgICAgICA4MixcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3OCxcbiAgICAgICAgMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxLFxuICAgICAgICA0OCxcbiAgICAgICAgODQsXG4gICAgICAgIDU4LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NCxcbiAgICAgICAgMjIxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAzMCxcbiAgICAgICAgNzksXG4gICAgICAgIDEyLFxuICAgICAgICA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgODIsXG4gICAgICAgIDk2LFxuICAgICAgICA4MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTEsXG4gICAgICAgIDkwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAzNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDk4LFxuICAgICAgICA3OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzksXG4gICAgICAgIDE0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgOSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExLFxuICAgICAgICA0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDg1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI4LFxuICAgICAgICA5MixcbiAgICAgICAgMTM2LFxuICAgICAgICA2NixcbiAgICAgICAgMzgsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDk1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEzLFxuICAgICAgICA4MixcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTgxLFxuICAgICAgICA4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTQxLFxuICAgICAgICA3MixcbiAgICAgICAgODAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDc3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODUsXG4gICAgICAgIDkxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTc2LFxuICAgICAgICA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQyLFxuICAgICAgICA5LFxuICAgICAgICAyOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDU5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzksXG4gICAgICAgIDQwLFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjBOL1NxWkE3RGl5b1ZMbXlKNnFTZ3ViNm53YVBDSjF2YUcvODhkRVYwY2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NjIxNDg2MzIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwN0UxNUI5NDVBQUMyRTkzNUFEQjQzRDFCQjgzNjhDMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY2MjI0MzdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU2MjE0ODYzMjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkM5NTc0MDVFOEE0QUEwNTUyRDY0ODIwNkFEMzZEMUI4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjYyMjQzOVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJUYklWMTJUSFM3S1F4Z285N0hjUHd3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjZkMjA4NWI0LWU0MDktNDliNC1iMTNiLTc2Mjk0N2EwNWFjY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzMsXG4gICAgICAyNixcbiAgICAgIDE4OCxcbiAgICAgIDI0OSxcbiAgICAgIDU5LFxuICAgICAgMTk1LFxuICAgICAgMTczLFxuICAgICAgNjQsXG4gICAgICAyMyxcbiAgICAgIDIyNixcbiAgICAgIDE3MyxcbiAgICAgIDY3LFxuICAgICAgNTgsXG4gICAgICAyOSxcbiAgICAgIDE4NCxcbiAgICAgIDEyMCxcbiAgICAgIDksXG4gICAgICAxNzEsXG4gICAgICAxMzgsXG4gICAgICAxNjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMCxcbiAgICAgIDI4LFxuICAgICAgMjM1LFxuICAgICAgMjQxLFxuICAgICAgMTAwLFxuICAgICAgNDksXG4gICAgICAxODIsXG4gICAgICAxODEsXG4gICAgICAyMjcsXG4gICAgICAyMDIsXG4gICAgICA5LFxuICAgICAgMjI2LFxuICAgICAgMjIsXG4gICAgICA4NyxcbiAgICAgIDE3NixcbiAgICAgIDIwNixcbiAgICAgIDExNixcbiAgICAgIDkzLFxuICAgICAgNzgsXG4gICAgICAyNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSzlCM1RLMk5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTYyMTQ4NjMyMzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzODA1ODA1NzU3NjY4Mzo2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkIjwnZCs8J2QmvCdkJvwnZCo8J2QriDwnZCI8J2Qlyvwn468XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVNCcDUwRUVOMm94cklHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJwMFl5b1pTWXBNVDF1Z3prU0tlbzh4ZXkrL2QzQWNlTldqQ0didjZUK1FNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInVvL1pKUTlTTXN4NnIzTWtSWGJTQjQ0eHZrbFRHMDRKWlZvdW5QVk5xeFhyQVZ5ekwvb2pTREc3MzZoSnc3L0cvMUd2UFExMzRSOVQvd0pCQnA3ZkRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInBTbnlBUno0VG40K0FkS3dwNy96T094QTJrMkhHVmRZZlNKbU5XcTZoVFF1dUMrV0lLVHBjVzlyUDQ1dWNtUEg5SHA3bkVtTThkTG5iNmxZMzVCbmpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTYyMTQ4NjMyMzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjYyMjQzMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5HOVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTkc5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiTnJlS1RDMVZFWnplNklncGV5MGdia2dYVGFYUFRxdGsvRlRzR1Rtb0lNZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTM1MTk4NDAyLFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwxLDQsNV19LFwidGltZXN0YW1wXCI6XCIxNzE2NTk3MTA5NDQzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
