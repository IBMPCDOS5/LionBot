module.exports.run = (client, message, args, throwex) => {
const discord = require('discord.js');
let phrase = args.join(" ");
let embed = new discord.RichEmbed()
function throwex(e) {
    var embedTitle = ["I got it... I got it... nope, I didn't get it.", "This bot is about as stable as Trump's Twitter.", "The error is a lie", "Got it! Take that, Precipitation!"];
    let embed = new Discord.RichEmbed()
        .setTitle(embedTitle[Math.floor(Math.random() * embedTitle.length)])
        .addField("Error Details", e)
        .setFooter("The error that was thrown has been logged to the console.")
        .setColor("RED")
    message.channel.send({ embed });
    console.log(e);
};
try{
embed.setTitle("LionBot says...")
embed.setDescription(phrase)
embed.setFooter(`Said by ${message.author.username} at ${new Date()}`, message.author.avatarURL)
embed.setColor("ORANGE")
message.delete()
message.channel.send({ embed })
}

catch (e) {
throwex(e)
}
}
module.exports.help = {
    name: "embedsay",
    args: "[args]",
    notes: `Repeats what you type, but attributes it to you.`,
    category: 'Fun'
}
