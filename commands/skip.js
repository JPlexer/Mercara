exports.run = (client, message, args, guild) => {
    client.guildm[message.guild.id].dispatcher.end();
    message.reply(" is skipping now!");
  };

 exports.help = {
    name: "skip",
    category: "Music",
    description: "Skips to the next song",
    usage: "skip"
  }; 