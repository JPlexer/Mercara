exports.run = (client, message, args, guild) => {
    client.guildm[message.guild.id].queue = [client.guildm[message.guild.id].queue.slice(0, 1)];
    client.guildm[message.guild.id].queueNames = [client.guildm[message.guild.id].queueNames.slice(0, 1)];
    message.reply(" cleared the Queue!");
  };

  exports.help = {
    name: "clear",
    category: "Music",
    description: "clears the queue, while keeping the current song",
    usage: "clear"
  };