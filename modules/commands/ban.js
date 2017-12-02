module.exports.run = (client, message, args, throwex) => {
    const Discord = require('discord.js')
    var banneResponse = ["Uh Oh. Moderators Sure aren't happy", "What did you do this time?", "Why do *I* have to do the dirty work?", "Banne, banne, banne!"]
    try {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`Who do you think you are? Running around banning people!`);

        let person = message.guild.member(message.mentions.users.first());
        if (person == null) return message.reply("No one was mentioned. Can I ban you instead?");

        message.guild.member(person).ban(args.slice(1).join(" ")).then(member => {
            let embed = new Discord.RichEmbed()
            embed.setColor("RED")
            embed.setTitle("Ban")
            embed.setDescription(banneResponse[Math.floor(Math.random() * banneResponse.length)])
            embed.addField('Member banned: ', (person))
            embed.addField('Reason: ', (`${args.join(" ")}`))
            message.channel.send({ embed })
        })
    } catch (error) {
        throwex(error);
    }
}
module.exports.help = {
    name: 'ban',
    args: '[person], [args]',
    notes: 'Bans a person from the server.',
    category: 'Moderation'
}
