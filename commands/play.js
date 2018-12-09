const fetchVideoInfo = require("youtube-info");
exports.run = (client, message, guild, args) => {
  console.log(client.guild[message.guild.id].queue)
    if (message.member.voiceChannel || client.guild[message.guild.id].voiceChannel != null) {
      if (client.guild[message.guild.id].queue.length > 0 || client.guild[message.guild.id].isPlaying) {
        client.getID(args, id => {
          client.add_to_queue(id, message, guild);
          fetchVideoInfo(id, (err, {
            title
          }) => {
            if (err) throw new Error(err);
            message.reply(` your Requested Song, **${title}** was added to the Queue!`);
            client.guild[message.guild.id].queueNames.push(title);
          });
        });
      } else {
        isPlaying = true;
        client.getID(args, id => {
          client.guild[message.guild.id].queue.push(id);
          client.playMusic(id, message, guild);
          fetchVideoInfo(id, (err, {
            title
          }) => {
            if (err) throw new Error(err);
            client.guild[message.guild.id].queueNames.push(title);

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