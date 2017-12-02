/****************************************
 *
 *   LionBot: (Basically Half-Baked) Moderation bot, with a few fun commands.
 *   written by ServerLion#1789
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the MIT License.
 *
 *  FloppyDiskDrive wrote the handler and helped me fix my derps. (Thanks again! c:)
 *  Jtsshieh wrote the help command and liscense file
 *
 *
 * *************************************/

var ver = "0.0.1";
const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const config = require("./config.json")
var prefix = 'lion.'
var vicCount = 0;
var sameMsg = {};
//Let's login to our bot account!
var token = config.token
client.login('UmExcuseMeThatIsPrivate')
//Set the game
client.on('ready', () => {
    console.log("[i] LionBot " + ver + " is now ready to go!");
    function gameRandomizer() {
        var presence = ["Wii Sports", `${prefix}help | LionBot v${ver}`, "stuff", "Save Net Neutrality!", `with ${client.guilds.size} guilds`];
        var gameSetter = presence[Math.floor(Math.random() * presence.length)];
        client.user.setGame(gameSetter);
    }
    var gameChooser = setInterval(gameRandomizer, 30000);
});
//Check for Mod Permissions
var modCommand;

function hasPermissions(perm) {
    if (message.member.hasPermission(perm)) {
        return true;
    } else {
        return false;
    }
}
//Command Stuff
fs.readdir("./modules/commands/${f}", (err, files) => {
    if (err) console.error(err);

    let modules = files.filter(f => f.split(".").pop() === "js");
    if (modules.length <= 0) {
        console.log("No public commands found. Running with no public commands loaded.");
        return;
    }

    console.log(`Now loading ${modules.length} public commands.`)
    modules.forEach((f, i) => {
        let props = require(`./modules/commands/${f}`);
        try {
            client.commands.set(props.help.name, props);
        } catch (err) {
            console.log('One or more of your public commands caused an error. Check your public commands and try again. \n=> ' + err);
            process.exit(1)
        }
    })

    console.log(`Finshed loading all ${modules.length} commands.`)
})

//Errors and Responses
client.on("message", message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;


    if (message.content.includes(process.env.TOKEN)) {
        let embed = new Discord.RichEmbed()
            .setTitle("Oh no... what have you done?")
            .setDescription("The token for LionBot has been leaked and will be leaving in 30 seconds.")
            .setColor("RED")
        var leave = setImmediate(message.guild.leave, 30000);
        message.delete();
        leave();
    }
    function throwex(e) {
        var embedTitle = ["I got it... I got it... nope, I didn't get it.", "This bot is about as stable as Trump's Twitter.", "The error is a lie", "Got it! Take that, Precipitation!"];
        let embed = new Discord.RichEmbed()
            .setTitle(embedTitle[Math.floor(Math.random() * embedTitle.length)])
            .addField("Error Details", e)
            .setFooter("The error that was thrown has been logged to the console.")
            .setColor("RED")
        message.channel.send({ embed });
        console.log(e);
    }


    try {
        let starEmote = message.reactions.equals("?");
        if (starEmote.length < 3) {
            message.reply("yay it work");
        }
    } catch (e) {
        let embed = new Discord.RichEmbed()
            .setTitle("An error has occured.")
            .setDescription(`An error has occured while performing an action.\r\n${e})`)
            .setColor("RED")
        message.channel.send({ embed });
    }

    let array = message.content.split(" ");
    let command = array[0];
    let args = array.slice(1);

    if (!command.startsWith(prefix)) return;

    let cmd = client.commands.get(command.slice(prefix.length));
    if (cmd) {
        cmd.run(client, message, args, throwex);
    }

});
//Error
process.on('unhandledRejection', function (err, p) {
    console.log("[X] " + err.stack);
});
