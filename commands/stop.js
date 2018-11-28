exports.run = (client, message, guilds, args) => {
    guilds[message.guild.id].queue.length = 0;
    guilds[message.guild.id].dispatcher.end();
    message.reply(' stopped the Music!')
  };

  exports.help = {
    name: "stop",
    category: "Music",
    description: "Stops the Music for you",
    usage: "stop"
  };