const { MessageEmbed } = require("discord.js-selfbot-v13");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let basarili = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji
exports.run = async (client, message, args) => {
  
  if (message.author.id === ayarlar.sahip) {
  if (!db.fetch(`afk`)) return message.reply({content:`${basarisiz} ${message.author}, Görünüşe göre afk modu zaten kapalı.`}).then(x => setTimeout(() => {x.delete()}, 5000));
  
message.reply({content:`${basarili} ${message.author}, Başarıyla afk modu kapandı.`}).then(x => setTimeout(() => {x.delete()}, 5000));
await db.delete(`afk`)
await db.delete(`afk_sebep`)
await db.delete(`afk_süre`)
message.react('✅')
}};

exports.conf = {
  enabled: true,
  aliases: ['afk-k','afk-kapat']
};

exports.help = {
  name: "unafk",
  description: "Afk Olmanızı Sağlar.",
  usage: "afk / afk <sebep>"
};