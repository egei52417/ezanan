const Discord = require("discord.js"),
  db = require("quick.db");
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısın.`);

  let veri = await db.fetch(`rol1_${message.guild.id}`);
  let veri2 = await db.fetch(`rol2_${message.guild.id}`);
  let e3 = await db.fetch(`roldavet2_${message.guild.id}`);
  let rol = message.mentions.roles.first();
  if (!rol) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`Lütfen Silinecek Rütbenin Rolünü Etiketleyiniz!`)
      .setColor("RED")
      .setFooter(client.user.username, client.user.avatarURL);
    message.channel.send(embed);
    return;
  }
  if (rol.id === veri) {
    const embed = new Discord.MessageEmbed()
      .setDescription(
        `Başarıyla Rütbeler Arasında **${
          message.guild.roles.get(veri).name
        }** Rolüne Sahip Rütbe Silindi!`
      )
      .setColor("GREEN")
      .setFooter(client.user.username, client.user.avatarURL);
    message.channel.send(embed);
    if (!veri) {
      await db.delete(`rol1_${message.guild.id}`);
      await db.delete(`roldavet1_${message.guild.id}`);
    } else {
      await db.set(`rol1_${message.guild.id}`, veri2);
      await db.set(`roldavet1_${message.guild.id}`, e3);
      await db.delete(`rol2_${message.guild.id}`);
      await db.delete(`roldavet2_${message.guild.id}`);
      return;
    }
  } else if (rol.id === veri2) {
    const embed = new Discord.MessageEmbed()
      .setDescription(
        `Başarıyla Rütbeler Arasında **${
          message.guild.roles.get(veri2).name
        }** Rolüne Sahip Rütbe Silindi!`
      )
      .setColor("GREEN")
      .setFooter(client.user.username, client.user.avatarURL);
    message.channel.send(embed);
    await db.delete(`rol2_${message.guild.id}`);
    await db.delete(`roldavet2_${message.guild.id}`);
    return;
  } else {
    const embed = new Discord.MessageEmbed()
      .setDescription(`Bu Role Ait Bir Rütbe Bulamadım!`)
      .setColor("RED")
      .setFooter(client.user.username, client.user.avatarURL);
    message.channel.send(embed);
    return;
  }
};
exports.config = {
  name: "rütbe-sil",
  aliases: []
};

