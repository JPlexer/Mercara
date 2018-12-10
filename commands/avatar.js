exports.run = (client, message, args) => {
    let avatar = message.mentions.users.size ? message.mentions.users.avatarURL() : message.author.avatarURL();
    if (message.mentions.users.size > 0) {
        message.channel.send(`Avatar for, **${message.mentions.users.username}:**\n${avatar}`);
    } else {
      message.channel.send(`Avatar for, **${message.author.username}:**\n${avatar}`);
    }
}
  
  exports.help = {
    name: "avatar",
    category: "Pix",
    description: "Fetches a user\'s avatar.",
    usage: "avatar @user"
  };
