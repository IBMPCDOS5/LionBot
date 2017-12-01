module.exports.run = (client, message, args, throwex) => {
  message.member.setNickname(`${args.join(" ")}`)
}
module.exports.help = {
    name: 'nick',
    args: '[nickname], [args]',
    notes: 'Sets your nickname',
    category: 'Moderation'
}
