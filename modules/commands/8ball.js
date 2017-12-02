
module.exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    var reply = ["Yes", "No", "IDK I'm just a bot", "Ask PrecipitationJS"]
    let embed = new Discord.RichEmbed()
        embed.setTitle(`The 8 Ball has spoken!`)
        embed.setDescription(`${reply[Math.floor(Math.random () * reply.length)]}`)
        message.reply( {embed} )
}

module.exports.help = {
    name: "8ball",
    args: "[question]",
    notes: "Let the virtual 8ball tell you.",
    category: 'Fun'
}
