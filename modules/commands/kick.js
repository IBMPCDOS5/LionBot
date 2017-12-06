module.exports.run = (client, message, args, throwex) => {
    const Discord = require('discord.js')
    let kick = ["Uh Oh! You got REJECTED!", "HmMmMmMmM", "Goodbye"]
    try {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply(`**:no_entry_sign: ERROR:** Insufficient permissions.`);

        let person = message.guild.member(message.mentions.users.first());
        if (person == null) return message.reply("No one was mentioned. Can I kick you instead?");

        message.guild.member(person).kick(args.slice(1).join(" ")).then(member => {
            let embed = new Discord.RichEmbed()
            embed.setTitle(`**KICK**`)
            embed.setDescription(`${kick[Math.floor(Math.random () * kick.length)]}`)
            embed.addField('Member Kicked: ', (person))
            embed.addField('Reason: ', (`${args.join(" ")}`))
            message.channel.send({ embed });

        })
    } catch (error) {
        throwex(error);
    }
}
module.exports.help = {
    name: 'kick',
    args: '[person], [args]',
    notes: 'Kicks a person from the server.',
    category: 'Moderation'
}
