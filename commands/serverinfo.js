exports.run = (client, message, args) => { // eslint-disable-line no-unused-vars
  message.channel.send(`= STATISTICS =
• Server Name:: ${message.guild.name}
• Created At :: ${message.guild.createdAt}
• Users      :: ${message.guild.memberCount}
• Joined At  :: ${message.member.joinedAt}
• Channels   :: ${message.guild.channels}`, {code: "asciidoc"});
};

exports.help = {
  name: "serverinfo",
  category: "Miscelaneous",
  description: "Gives some useful server info's",
  usage: "serverinfo"
};