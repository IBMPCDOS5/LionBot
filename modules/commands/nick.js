module.exports.run = (client, message, args, throwex) => {
  let nick = (`${args.join(" ")}`)
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
  if (nick.length >= 32){
    message.reply("That nickname is too long! 32 Charecters or less please!");
  }
  else if (nick.length == 0){
  message.reply("Nickname Cleared!");
  }
  else {
    message.member.setNickname(`${args.join(" ")}`)
    message.reply(`Ok! I set your nickname to "${args.join(" ")}". `);
  }
}
catch (e) {
throwex(e)
}
}
module.exports.help = {
    name: 'nick',
    args: '[nickname], [args]',
    notes: 'Sets your nickname. Do the command without arguments to clear your nickname.',
    category: 'Moderation'
}
