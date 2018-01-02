module.exports.run = (client, message, args, throwex) => {
  let nick = args.join(" ");
  if (nick == null) {
  message.member.setNickname(nick)
  message.reply ("Ok! I cleared that nickname for you!")
  }
  else {
  message.member.setNickname(nick)
  message.reply(`Ok! I set your nickname to ${args.join(" ")}`)
}
}
module.exports.help = {
    name: 'nick',
    args: '[nickname], [args]',
    notes: 'Sets your nickname. Do the command without arguments to clear your nickname.',
    category: 'Moderation'
}