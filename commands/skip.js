exports.run = (client, message, args, guild) => {
    client.skip_song(message, guild, client);
    message.reply(" is skipping now!");
  };

 exports.help = {
    name: "skip",
    category: "Music",
    description: "Skips to the next song",
    usage: "skip"
  }; 