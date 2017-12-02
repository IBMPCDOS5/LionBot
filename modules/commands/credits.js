module.exports.run = (client, message, args) => {

const Discord = require('discord.js')
let embed = new Discord.RichEmbed()
embed.setColor("ORANGE")
embed.setTitle("**Credits**")
embed.setDescription("*Thank you all c:*")
embed.addField('Creator', "ServerLion")
embed.addField('Handler', "FloppyDiskDrive")
embed.addField('Help Command', "Jtsshieh")
embed.addField('As well as', "all those that helped me through the code in little ways.")
message.channel.send({ embed })}
module.exports.help = {
    name: "credits",
    args: "none",
    notes: `Tells you about the amazing people who built me`,
    category: 'Basic'
}
