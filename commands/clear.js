exports.run = (message, guilds) => {
    guilds[message.guild.id].queue = [guilds[message.guild.id].queue.slice(0, 1)];
    guilds[message.guild.id].queueNames = [guilds[message.guild.id].queueNames.slice(0, 1)];
    message.reply(" cleared the Queue!");
  };

  exports.help = {
    name: "queue",
    category: "Music",
    description: "Stops the Music for you",
    usage: "stop"
  };