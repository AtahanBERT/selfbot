const reqEvent = (event) => require(`../etkinlik/${event}`);
module.exports = client => {
  client.on('messageCreate', reqEvent('mesaj'))
  client.on('ready', reqEvent('hazır'))
  client.off('callCreate', reqEvent('aramaKuruldu'))
};
