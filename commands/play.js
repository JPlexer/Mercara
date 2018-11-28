const fetchVideoInfo = require("youtube-info");
exports.run = (message, guilds, args) => {
    if (message.member.voiceChannel || guilds[message.guild.id].voiceChannel != null) {
      if (guilds[message.guild.id].queue.length > 0 || guilds[message.guild.id].isPlaying) {
        client.getID(args, id => {
          client.add_to_queue(id, message, guilds);
          fetchVideoInfo(id, (err, {
            title
          }) => {
            if (err) throw new Error(err);
            message.reply(` your Requested Song, **${title}** was added to the Queue!`);
            guilds[message.guild.id].queueNames.push(title);
          });
        });
      } else {
        isPlaying = true;
        client.getID(args, id => {
          guilds[message.guild.id].queue.push(id);
          client.playMusic(id, message, guilds);
          fetchVideoInfo(id, (err, {
            title
          }) => {
            if (err) throw new Error(err);
            guilds[message.guild.id].queueNames.push(title);

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