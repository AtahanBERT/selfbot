const Discord = require("discord.js-selfbot-v13");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let basari = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji;
exports.run = async (client, message, args) => {
  
if (message.author.id === ayarlar.sahip) {

let data
let kufur = await db.fetch(`taklit`);
let kanal2 = client.users.cache.get(args[0])
let kanal = message.mentions.users.first()
if(kanal) {data = kanal.id}
if(kanal2) {data = args[0]}
if(!data) return message.reply(`${basarisiz} ${message.author}, Lütfen bir kullanıcı belirtiniz.`).then(x => setTimeout(() => {x.delete()}, 5000));
if(data === client.user.id) return message.reply(`${basarisiz} ${message.author}, Kendinizi taklit edemezsiniz!`).then(x => setTimeout(() => {x.delete()}, 5000));
 
message.reply(`${basari} ${message.author}, Kurban <@!${data}> olarak ayarlandı.`) 

await db.set(`kurban`, data)
message.react('✅')
}}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: "kurban",
  description: "",
  usage: ""
};