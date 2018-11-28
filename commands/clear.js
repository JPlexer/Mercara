exports.run = (client, message, guilds, args) => {
    guilds[message.guild.id].queue = [guilds[message.guild.id].queue.slice(0, 1)];
    guilds[message.guild.id].queueNames = [guilds[message.guild.id].queueNames.slice(0, 1)];
    message.reply(" cleared the Queue!");
  };

  exports.help = {
    name: "clear",
    category: "Music",
    description: "clears the queue, while keeping the current song",
    usage: "clear"
  };