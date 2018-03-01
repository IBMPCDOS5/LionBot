const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
client.commands = new Discord.Collection();
var banneResponse = ["Uh Oh. Moderators Sure aren't happy", "What did you do this time?", "Why do *I* have to do the dirty work?", "Banne! banne! banne!"]

let prefix = 'lion.'


//Elements of this handler (Mainly reading Files) were based on PrecipitationJS
//Excelent help command used with permission from Jtsshieh and his bot BonGon

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
//This is all reading files (Thanks agian to FloppyDiskDrive for allowing me to use some ellements of PrecipitationJS)
fs.readdir("/Users/nayab_warach/Documents/Discord/LionBot/LionBot/LionBot/modules/commands/", (err, files) => {
    if (err) console.error(err);

    let commandfiles = files.filter(f => f.split(".").pop() === "js");
    console.log(`Now loading all commands...`)
    commandfiles.forEach((f, i) => {
        let yourfiles = require(`/Users/nayab_warach/Documents/Discord/LionBot/LionBot/LionBot/modules/commands/${f}`);
        try {
            client.commands.set(yourfiles.help.name, yourfiles);
        } catch (err) {
            console.log(err);
            console.log('Shutting Down...');
            process.exit(1)
        }
    })

    console.log(`Finshed loading all commands.`)
})

client.on('message', message => {
  let array = message.content.split(" ");
  let command = array[0];
  let args = array.slice(1);

  function errorhandler(e) {
    let embed = new Discord.RichEmbed()
    embed.setTitle("Error!")
    embed.setDescription("I think I did a bad")
    embed.setColor("RED")
    embed.addField("Details:", "```" + e + "```")
    embed.setFooter("I'll go tell Serverlion now. Feel free to try again while I do.")
    console.error("Uh Oh! [Error]   " + e);
    message.channel.send({ embed });
  }

  if (!command.startsWith(prefix)) return;

  let com = client.commands.get(command.slice(prefix.length));
  if (com) {
      com.run(client, message, args, errorhandler);
  }



});
client.on("guildCreate", (guild) => {

    console.log(client.user.username + " was invited to and joined " + guild.name);
    guild.channels.find(c => c.name == 'general').send("Thanks for choosing LionBot! Please run lion.help to get started. To take advantage of current and future moderation commands please create a channel called '#logs'. If your guild has over 200 members DM ServerLion#1789 and we can make an exception to that. Thanks again! -ServerLion ");
});

client.on("guildDelete", (guild) => {

    console.log(client.user.username + " has left " + guild.name);
});

client.on("guildBanAdd", (guild, user, throwex) => {
  let embed = new Discord.RichEmbed()

  embed.setColor("RED")
  embed.setTitle("Ban")
  embed.setDescription(banneResponse[Math.floor(Math.random() * banneResponse.length)])
  embed.addField('Member banned: ', (user))
  if (guild.id == "336487228228370432"){
     client.channels.get("398265731176988682").send({ embed });
  }
  else if (guild.id == "264445053596991498") {
    client.channels.get("265156361791209475").send({ embed });

  }
  else if (guild.id == "356165218625388554") {
    client.channels.get("409170359804231680").send({ embed });

  }
  else{
          guild.channels.find(c => c.name == 'logs').send({ embed });
}


});

client.on("guildBanRemove", (guild, user, throwex) => {
  let embed = new Discord.RichEmbed()

  embed.setColor("GREEN")
  embed.setTitle("Pardon")
  embed.setDescription(banneResponse[Math.floor(Math.random() * banneResponse.length)])
  embed.addField('Member unbanned:', (user))
  if (guild.id == "336487228228370432"){
     client.channels.get("398265731176988682").send({ embed });
  }
  else if (guild.id == "264445053596991498") {
    client.channels.get("265156361791209475").send({ embed });

  }
  else if (guild.id == "356165218625388554") {
    client.channels.get("409170359804231680").send({ embed });

  }
  else{
          guild.channels.find(c => c.name == 'logs').send({ embed });

}
});

client.on("messageUpdate", (oldMessage, newMessage, guild) => {

  if (oldMessage.author.bot) return;
try{
    let embed = new Discord.RichEmbed()
  embed.setColor("ORANGE");
  embed.setTitle(`:pencil2: **Message Edit**`);
  embed.setDescription(`Message by ${oldMessage.author.username} was edited in ${oldMessage.channel}`)
  embed.addField('Old Message', '```'+(oldMessage.content)+'```');
  embed.addField('New Message', '```'+(newMessage.content)+'```');
  embed.setFooter(`Edited Message by ${oldMessage.author.username} on ${new Date()}`, oldMessage.author.avatarURL)
  if (newMessage.guild.id == "336487228228370432") {
     client.channels.get("398333160452128778").send({ embed });
  }
  else if (newMessage.guild.id == "264445053596991498") {
    client.channels.get("265156361791209475").send({ embed });

  }
  else if (newMessage.guild.id == "356165218625388554") {
    client.channels.get("409170359804231680").send({ embed });

  }
  else {
          newMessage.guild.channels.find(c => c.name == 'logs').send({ embed });
}
}
catch (error){
  console.log(error)
}
});

client.on("messageDelete", (Message, throwex) => {
  if (Message.author.bot) return;

try{
  let embed = new Discord.RichEmbed()
  .setColor("RED")
  .setTitle(":wastebasket: **Message Delete**")
  .setDescription(`Message by ${Message.author.username} was deleted in ${Message.channel}`)
  .addField(`Deleted Message`, '```'+(Message.content)+'```')
  .setFooter(`Deleted Message by ${Message.author.username} on ${new Date()}`, Message.author.avatarURL)
 db.fetchObject(`messageChannel_${member.guild.id}`).then(i => {
 if (!member.guild.channels.get(i.text)) return;
else message.channel.send(member.guild.channels.get(i.text), member).replace('{members}', member.guild.memberCount))
 }
}
}
catch (error){
  console.log(error)
}
});
client.login(process.env.TOKEN);
