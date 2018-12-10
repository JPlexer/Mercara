exports.run = (client, message, args) => { // eslint-disable-line no-unused-vars
  message.channel.send(`= SERVERINFO =
• Server Name:: ${message.guild.name}
• Created At :: ${message.guild.createdAt}
• Users      :: ${message.guild.memberCount}
• Joined At  :: ${message.member.joinedAt}`, {code: "asciidoc"});
};

exports.help = {
  name: "serverinfo",
  category: "System",
  description: "Gives some useful server infos",
  usage: "serverinfo"
};