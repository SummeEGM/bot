const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Der Benutzer konnte nicht gefunden werden.");
    let reason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Neue Meldung")
    .setColor("#18FFFF")
    .addField("Gemeldeter Benutzer", `${rUser} - ${rUser.id}`)
    .addField("Gemeldet von", `${message.author} - ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Zeitpunkt", message.createdAt)
    .addField("Grund", reason);
    
    let reportchannel = message.guild.channels.find(`name`, "meldungen");
    if(!reportchannel) return message.channel.send("Der Channel meldungen wurde nicht gefunden.");

        message.delete().catch(O_o=>{});
        reportchannel.send(reportEmbed);
}

module.exports.help = {
    name: "report"
}