const Discord = require('discord.js-selfbot-v13');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
///spammer by planta
 
exports.run = async(client, message, args) => {
  if (message.author.id === ayarlar.sahip) {
      let basarisiz = ayarlar.basarisizemoji
      let sayi = args[0];
      let mesaj = args.slice(1).join(' ');

if (isNaN(sayi)) return message.reply(`${basarisiz} ${message.author}, ${db.fetch(`prefix`) || ayarlar.prefix}spam <sayı> <mesaj> şeklinde yazınız.`).then(x => setTimeout(() => {x.delete()}, 5000))
if (mesaj.length < 1) return message.reply(`${basarisiz} ${message.author}, Kralım Spamlamam İçin Bişe Yazmalısınız.`).then(x => setTimeout(() => {x.delete()}, 5000))
  await message.delete();
for (var i = 0; i < sayi; i++)
{
message.channel.send(mesaj)
}

}};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'spam',
  description: 'spammer',
  usage: 'spam [yazdırmak istediğiniz şey]'
};