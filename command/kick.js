const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Der Benutzer konnte nicht gefunden werden.");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Du hast keine Berechtigungen für diesen Befehl.");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Die Person kann nicht gekickt werden.");
  
    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Kick")
    .setColor("#FFEA00")
    .addField("Benutzer", `${kUser} - ${kUser.id}`)
    .addField("Moderator", `<@${message.author.id}> - ${message.author.id}`)
    .addField("Zeitpunkt", message.createdAt)
    .addField("Grund", kReason);

    let kickchannel = message.guild.channels.find(`name`, "logs");
    if(!kickchannel) return message.channel.send("Der Channel logs wurde nicht gefunden.");

        message.guild.member(kUser).kick(kReason);
        message.guild.member(kUser).send("Du wurdest aufgrund eines Regelverstoßes vom Einfach-Gaming.de Discord gekickt. Grund: " + kReason);
        message.delete().catch(O_o=>{});
        kickchannel.send(kickEmbed);

        return; //-< Return entfernen bei Errors
}

module.exports.help = {
    name: "kick"
}