const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix.${message.guild.id}`)) || "-";
  if (!message.member.hasPermission("ADMINISTRATOR")) {
  message.channel.send(`  Bu komutu kullanabilmek için"**Yönetici** yetkisine sahip olmalısın.`);
    return;
  }
  let u = message.mentions.users.first();
let m = args.slice(1).join(" ")
  if (!u) {
    return message.channel.send(
      new Discord.MessageEmbed()
      .setFooter(bot.user.username, bot.user.avatarURL)
        .setDescription("**Davet Ekleyeceğin Kişiyi Etiketle!**")
        .setColor("#ffd100")
    );
  }
    if (!m) {
    return message.channel.send(
      new Discord.MessageEmbed()
      .setFooter(bot.user.username, bot.user.avatarURL)
        .setDescription("**Eklenecek Davet Sayısını Yazın!**")
        .setColor("#ffd100")
    );
  }
  const embed = new Discord.MessageEmbed()
    .setColor("#ffd100")
  .setFooter(bot.user.username, bot.user.avatarURL)
    .setDescription(`${u} Adlı Kişiye; ${m} davet eklendi!`);
  message.channel.send(embed);
  db.add(`davet_${u.id}_${message.guild.id}`, +m);
};
module.exports.config = {
    name: "davet-ekle",
  aliases: ["davetekle"]
};
