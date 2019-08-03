const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#18FFFF")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Erstellt am", message.guild.createdAt)
    .addField("Beitritt", message.member.joinedAt)
    .addField("Mitglieder", message.guild.memberCount);

    return message.channel.send(serverembed);}

module.exports.help = {
    name: "serverinfo"
}