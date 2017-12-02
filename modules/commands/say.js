module.exports.run = (client, message, args) => {
    var wowzers = args.join(" ");
    try {
        if (message.author.id == "299314446428274689") {
            message.delete();
            return message.channel.send(wowzers);
        }
        else {
            return message.reply("Ew! I will *NOT* say that!");
        }
    } catch (error) {
        console.log(error)
    }

}

module.exports.help = {
    name: "say",
    args: "[args]",
    notes: `Repeats what you type.`,
    category: 'Owner Only'
}
