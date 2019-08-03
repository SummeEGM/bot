const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Der Benutzer konnte nicht gefunden werden.");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Du hast keine Berechtigungen für diesen Befehl.");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Die Person kann nicht gebannt werden.");
  
    let banEmbed = new Discord.RichEmbed()
    .setDescription("Bann")
    .setColor("#F57F17")
    .addField("Benutzer", `${bUser} - ${bUser.id}`)
    .addField("Moderator", `<@${message.author.id}> - ${message.author.id}`)
    .addField("Zeitpunkt", message.createdAt)
    .addField("Grund", bReason);

    let banchannel = message.guild.channels.find(`name`, "logs");
    if(!banchannel) return message.channel.send("Der Channel logs wurde nicht gefunden.");

        message.guild.member(bUser).ban(bReason);
        message.guild.member(bUser).send("Du wurdest aufgrund eines Regelverstoßes vom Einfach-Gaming.de Discord permanent gebannt. Grund: " + bReason);
        message.delete().catch(O_o=>{});
        banchannel.send(banEmbed);

    return;
}

module.exports.help = {
    name: "ban"
}