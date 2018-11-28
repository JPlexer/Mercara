exports.run = (client, message, guild, args) => {
    guild[message.guild.id].queue = [guild[message.guild.id].queue.slice(0, 1)];
    guild[message.guild.id].queueNames = [guild[message.guild.id].queueNames.slice(0, 1)];
    message.reply(" cleared the Queue!");
  };

  exports.help = {
    name: "clear",
    category: "Music",
    description: "clears the queue, while keeping the current song",
    usage: "clear"
  };