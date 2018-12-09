exports.run = (client, message, args, guild) => {
    let message2 = "```";
    for (let i = 0; i < client.guildm[message.guild.id].queueNames.length; i++) {
      const temp = `${i + 1}: ${client.guildm[message.guild.id].queueNames[i]}${i === 0? "**(Currently Playing)***" : ""}\n`;
      if ((message2 + temp).length <= 2000 - 3) {
        message2 += temp;
      } else if (client.guildm[message.guild.id].queue.length === 0) {
        message.channel.send("Nothing in Queue")
      } else {
        message2 += "```";
        message.channel.send(message2);
        message2 = "```";
      }
    }
    message2 += "```";
    message.channel.send(message2);
  };

  exports.help = {
    name: "queue",
    category: "Music",
    description: "Shows you the queue",
    usage: "queue"
  };