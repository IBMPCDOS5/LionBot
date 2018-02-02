module.exports.run = (client, message, throwex) => {
	const Discord = require('discord.js');
  let args = message.content.split(" ").slice(1);
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
    if(!message.author.id == 299314446428274689 || 228271067821506560) return message.reply("No! I will not run your filthy code!")
	else{
			const code = args.join(" ");

			try {
				let evaled = eval(code);
      	if (typeof evaled !== "string"){
        evaled = require("util").inspect(evaled)}
				let embed = new Discord.RichEmbed()
				embed.setTitle("Evaluation")
				embed.setDescription("Here you go! c:")
				embed.addField("Input:", `\`\`\`js\n${code}\n\`\`\``)
				embed.addField("Output:", `\`\`\`js\n${(evaled)}\n\`\`\``)
				embed.setColor("BLACK")
				embed.setTimestamp()
			}
			catch (error) {
			throwex(error)
			}
}
}


}

module.exports.help = {
    name: "eval",
    args: "[code]",
    notes: "Executes JavaScript code.",
    category: 'Owner Only'
}
