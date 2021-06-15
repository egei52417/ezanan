const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "-";

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısın.`);

  let u = message.mentions.users.first();
  if (!u) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Daveti Sıfırlanacak Kişiyi Etiketle!")
        .setColor("RED")
        .setFooter(bot.user.username, bot.user.avatarURL)
    );
  }
  const embed = new Discord.MessageEmbed()
    .setColor("#ffd100")
    .setDescription(
      `${u} Adlı Kişinin Davetlerinin Sıfırlanmasını Onaylıyor musunuz?`
    )
    .setFooter(bot.user.username, bot.user.avatarURL);
  message.channel.send(embed).then(async function(sentEmbed) {
    const emojiArray = ["✅"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => sentEmbed.edit("İşlem İptal Edildi!"));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "✅") {
        message.channel.send(
          `İşlem Onaylandı! ${u} Adlı Kişinin Davetleri Sıfırlandı!`
        );
        db.delete(`davet_${u.id}_${message.guild.id}`);
      }
    });
  });
};
module.exports.config = {
  name: "davet-sıfırla",
  aliases: ["davetsıfırla"]
};

