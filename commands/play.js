const fetchVideoInfo = require("youtube-info");
exports.run = (client, message, args, guild) => {
    if (message.member.voiceChannel || client.guildm[message.guild.id].voiceChannel != null) {
      if (client.guildm[message.guild.id].queue.length > 0 || client.guildm[message.guild.id].isPlaying) {
        client.getID(args, client, id => {
          client.add_to_queue(id, message, client);
          fetchVideoInfo(id, (err, {
            title
          }) => {
            if (err) throw new Error(err);
            message.reply(` your Requested Song, **${title}** was added to the Queue!`);
            client.guildm[message.guild.id].queueNames.push(title);
          });
        });
      } else {
        isPlaying = true;
        client.getID(args, client, id => {
          client.guildm[message.guild.id].queue.push(id);
          client.playMusic(id, message, guild, client);
          fetchVideoInfo(id, (err, {
            title
          }) => {
            if (err) throw new Error(err);
            client.guildm[message.guild.id].queueNames.push(title);

            message.reply(` your Requested Song, **${title}** is now Playing!`);
          })
        });
      }
    } else {
      message.reply(" you must be in a Voice Channel!");
    }
  };

  exports.help = {
    name: "play",
    category: "Music",
    description: "Plays your favourite Songs",
    usage: "play [songname]"
  };