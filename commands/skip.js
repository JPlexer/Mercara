exports.run = (message, guilds) => {
    client.skip_song(message, guilds);
    message.reply(" is skipping now!");
  };

 exports.help = {
    name: "skip",
    category: "Music",
    description: "Skips to the next song",
    usage: "skip"
  }; 