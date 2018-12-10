exports.run = (client, msg, args) => {
    let avatar = msg.mentions.users.size ? msg.mentions.users.avatarURL() : msg.author.avatarURL();
    if (msg.mentions.users.size > 0) {
        msg.channel.send(`Avatar for, **${msg.mentions.users.username}:**\n${avatar}`);
    } else {
      msg.channel.send(`Avatar for, **${msg.author.username}:**\n${avatar}`);
    }
}
  
  exports.help = {
    name: "avatar",
    category: "Pix",
    description: "Fetches a user\'s avatar.",
    usage: "avatar @user"
  };
