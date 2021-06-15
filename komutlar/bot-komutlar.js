const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`Titanik - Komut Sayısı`)
    .setDescription('**\n Titanik Bot,  Toplam**  **`' + client.commands.size + '`** **Komuta Sahiptir!**')
    .setColor("#ffd100")
    .setThumbnail('https://i.ibb.co/s2qGRFx/kod.png')
    .setTimestamp()
    .setFooter("Titanik Yeni Nesil Bot | ©️ Tüm Hakları Saklıdır!" , client.user.avatarURL())

    return message.channel.send(embed);
    
};

exports.config = {
  name: 'komutlar',
  aliases: ['komut-sayısı']
};

