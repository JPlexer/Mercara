exports.run = (client, message, guild, args) => {
    client.skip_song(message, guild);
    message.reply(" is skipping now!");
  };

 exports.help = {
    name: "skip",
    category: "Music",
    description: "Skips to the next song",
    usage: "skip"
  }; 