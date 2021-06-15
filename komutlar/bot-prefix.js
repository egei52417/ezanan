const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => {
let a = ayarlar.prefix
    let p = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
 let o = await db.fetch(`prefix.${message.guild.id}`)
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed()
.setDescription(`** Hey Bu Komutu Kullanabilmek İçin **Mesajları Yönet** Yetkisine Sahip Olmalısınız!** | **Kullanılan Prefixim:** ${p}`));
  
if(args[0] === "ayarla") {
if(o) { return message.channel.send(new Discord. MessageEmbed()
                                         .setColor("#ffd100")
.setDescription(`**Ayarlanmış Prefixi  Ayarlayamazsın! | Kullanılan Prefixim:** ${p} **Sıfırlamak İçin** ${p}**prefix sıfırla**`));
      }
if(!args[1]) return message.channel.send(new Discord.MessageEmbed()
                                              .setColor("#ffd100")
.setDescription(`**Bir Prefix Girmeyi Unutma! |  Kullanılan Prefixim:** ${p}`));
db.set(`prefix.${message.guild.id}`, args[1])
message.channel.send(new Discord.MessageEmbed()
                          .setColor("#ffd100")
.setDescription(`**Prefixim Başarıyla Ayarlandı! | Yeni Prefixim:** ${args[1]}`));
}
    if(args[0] === "sıfırla") {
    if(!o) {
       return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("#ffd100")
.setDescription(`**Ayarlanmayan Prefixi Sıfırlayamazsınız! | Kullanılan Prefixim:** ${p}`));
    }
    db.delete(`prefix.${message.guild.id}`)       
   return message.channel.send(new Discord.MessageEmbed()
                                    .setColor("#ffd100")
.setDescription(`**Prefixim Başarıyla Sıfırlandı! | Kullanılan Prefixim:** ${a}`));
  }
 
 if(!args[0]) return message.channel.send(new Discord.MessageEmbed()     
                  .setColor("#ffd100")                             
.setDescription(`**Prefix Ayarlamak İçin** ${p}**prefix ayarla <prefix>**\n **Sıfırlamak İçin** ${p}**prefix sıfırla | Kullanılan Prefixim:** \`${p}\``));
  
};
exports.config = {
name: "prefix",
aliases: ['p']
};