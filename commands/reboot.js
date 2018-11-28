exports.run = async (client, message, args, level) => {
    if (message.author.id != client.config.botowner) return message.channel.send("**Hey " + message.author.username + ", only JPlexer can use that!**");
    await message.reply("Bot is shutting down.");
    client.commands.forEach( async cmd => {
      await client.unloadCommand(cmd);
    });
    process.exit(1);
  };
  
  exports.help = {
    name: "reboot",
    category: "System",
    description: "Shuts down the bot. If running under PM2, bot will restart automatically.",
    usage: "reboot"
  };