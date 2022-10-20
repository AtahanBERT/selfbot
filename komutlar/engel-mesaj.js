const Discord = require("discord.js-selfbot-v13");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let basarili = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji
exports.run = async(client, message, args) => {
  
if (message.author.id === ayarlar.sahip) {

let kullanici = message.mentions.users.first() || client.users.cache.get(args[0])
let engel = client.relationships.cache.get(kullanici.id)

if (!kullanici) return message.reply("kullanici belirt")
if (!args.slice(1).join(" ")) return message.reply("mesaj belirt")
if (engel === 2) {
  await kullanici.unBlock()
  await kullanici.send(args.slice(1).join(" "))
  await kullanici.setBlock()
  message.react('✅')
} else if (engel !== 2) {
  await kullanici.send(args.slice(1).join(" "))
  await kullanici.setBlock()
  message.react('✅')
}
}};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['blocksend'],
  permLevel: 4
};

exports.help = {
  name: "e-mesaj",
  description: "Afk Olmanızı Sağlar.",
  usage: "afk / afk <sebep>"
};