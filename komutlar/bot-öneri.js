const Discord = require("discord.js");
const Alone = "#36393e";
const AloneDogru = "#22BF41";
const AloneHata = "#f30707";  
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

exports.run = function(client, message, args) {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;


const onerisiz = new Discord.MessageEmbed()
.setColor(AloneHata)
.setTitle("• Hata: 0001 •")
.setDescription("Bir Öneri Belirtiniz!")


const onerili = new Discord.MessageEmbed()
.setColor(AloneDogru)
.setTitle("Pirate | Başarılı")
.setDescription("Öneriniz Gönderilmiştir. Öneriniz İçin Teşekkür Ederiz. :)")
 
  

  var öneri = args.slice(0).join(" ");
 
  var guildID = ""; // Sunucu ID
 
  var channelID = ""; // Kanal ID
 
  if (!öneri) {
    return message.channel.send(embed);
  } else {
    var embed = new Discord.MessageEmbed()
 
      .setTimestamp()
 
      .setColor("RANDOM")
 
      .setAuthor(" • Bir Öneri Geldi!", client.user.avatarURL())
 
      .addField(" • Öneren Kullanıcı:", message.author.tag, true)
 
      .addField(" • Öneren Kullanıcı ID:", message.author.id,true)
 
      .addField(" • Önerisi:", öneri)

      .setFooter(`Titanik Yeni Nesil Bot | ©️ Tüm Hakları Saklıdır! `)
    
      .setThumbnail(message.author.avatarURL());
 
    client.guilds
      .cache.get(guildID)
      .channels.cache.get(channelID)
      .send(embed);

    message.channel.send(onerili);
  }
};
 
exports.config = {
  name: "öneri",
  aliases: ["istek"],
};

 