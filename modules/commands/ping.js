
module.exports.run = (client, message, args) => {
    let sportReply = [":ping_pong: Pong!", "No.. I hate table tennis."]
    let pingReplies = ["I'm totally not Precipitaion!", "1... 2... Switch!", "Insert Message Here", "Oh what, I need to say something??"];
    message.reply(`${sportReply[Math.floor(Math.random () * sportReply.length)]} || ${pingReplies[Math.floor(Math.random () * pingReplies.length)]} || Anyways my ping time is ${Math.round(client.ping)} ms.`)
}

module.exports.help = {
    name: "ping",
    args: "n/a",
    notes: "A very simple ping command.",
    category: 'Basic'
}
