exports.run = (message, guilds) => {
    guilds[message.guild.id].queue.length = 0;
    guilds[message.guild.id].dispatcher.end();
    message.reply(' stopped the Music!')
  };

  exports.help = {
    name: "queue",
    category: "Music",
    description: "Stops the Music for you",
    usage: "stop"
  };