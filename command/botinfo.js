const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("Bot Information")
        .setColor("#00ACC1")
        .setThumbnail(bicon)
        .addField("Bot Name", bot.user.username)
        .addField("Erstellt am", bot.user.createdAt)
        .addField("Author", "Summe");

        return message.channel.send(botembed);
}

module.exports.help = {
    name: "botinfo"
}