exports.run = (client, message, guild, args) => {
    client.guild[message.guild.id].queue.length = 0;
    client.guild[message.guild.id].dispatcher.end();
    message.reply(' stopped the Music!')
  };

  exports.help = {
    name: "stop",
    category: "Music",
    description: "Stops the Music for you",
    usage: "stop"
  };