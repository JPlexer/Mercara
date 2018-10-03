const ytdl = require("ytdl-core");
const request = require("request");
const fs = require("fs");
const getYouTubeID = require("get-youtube-id");
const fetchVideoInfo = require("youtube-info");
const yt_api_key = process.env.YT_TOKEN;
module.exports = {
  play: function (message, guilds, args) {
    if (message.member.voiceChannel || guilds[message.guild.id].voiceChannel != null) {
      if (guilds[message.guild.id].queue.length > 0 || guilds[message.guild.id].isPlaying) {
        module.exports.getID(args, id => {
          module.exports.add_to_queue(id, message, guilds);
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
        module.exports.getID(args, id => {
          guilds[message.guild.id].queue.push(id);
          module.exports.playMusic(id, message, guilds);
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
  },
  skip: function (message, guilds) {
    this.skip_song(message, guilds);
    message.reply(" is skipping now!");
  },
  queue: function (message, guilds) {
    let message2 = "```";
    for (let i = 0; i < guilds[message.guild.id].queueNames.length; i++) {
      const temp = `${i + 1}: ${guilds[message.guild.id].queueNames[i]}${i === 0? "**(Currently Playing)***" : ""}\n`;
      if ((message2 + temp).length <= 2000 - 3) {
        message2 += temp;
      } else if (guilds[message.guild.id].queue.length === 0) {
        message.channel.send("Nothing in Queue")
      } else {
        message2 += "```";
        message.channel.send(message2);
        message2 = "```";
      }
    }
    message2 += "```";
    message.channel.send(message2);
  },
  stop: function (message, guilds) {
    guilds[message.guild.id].queue.length = 0;
    guilds[message.guild.id].dispatcher.end();
    message.reply(' stopped the Music!')
  },
  clear: function (message, guilds) {
    guilds[message.guild.id].queue = [guilds[message.guild.id].queue.slice(0, 1)];
    guilds[message.guild.id].queueNames = [guilds[message.guild.id].queueNames.slice(0, 1)];
    message.reply(" cleared the Queue!");
  },
  skip_song: function (message, guilds) {
    guilds[message.guild.id].dispatcher.end();
  },

  playMusic: function (id, message, guilds) {
    guilds[message.guild.id].voiceChannel = message.member.voiceChannel;



    guilds[message.guild.id].voiceChannel.join().then(connection => {
      stream = ytdl(`https://www.youtube.com/watch?v=${id}`, );
      guilds[message.guild.id].skipReq = 0;
      guilds[message.guild.id].skippers = [];

      guilds[message.guild.id].dispatcher = connection.playStream(stream);
      guilds[message.guild.id].dispatcher.on('end', () => {
        guilds[message.guild.id].skipReq = 0;
        guilds[message.guild.id].skippers = [];
        guilds[message.guild.id].queue.shift();
        guilds[message.guild.id].queueNames.shift();
        if (guilds[message.guild.id].queue.length === 0) {
          guilds[message.guild.id].queue = [];
          guilds[message.guild.id].queueNames = [];
          guilds[message.guild.id].newsongs = [];
          guilds[message.guild.id].isPlaying = false;
          guilds[message.guild.id].voiceChannel.leave();
        } else {
          setTimeout(() => {
            module.exports.playMusic(guilds[message.guild.id].queue[0], message, guilds);
          }, 500)
        }
      })
    });
  },

  getID: function (str, cb) {
    if (module.exports.isYoutube(str)) {
      cb(getYouTubeID(str));
    } else {
      module.exports.search_video(str, id => {
        cb(id);
      });
    }
  },

  add_to_queue: function (id, message, guilds) {
    if (module.exports.isYoutube(id)) {
      guilds[message.guild.id].queue.push(getYoutubeID(id));
    } else {
      guilds[message.guild.id].queue.push(id);
    }
  },

  isYoutube: function (str) {
    return str.toLowerCase().includes("youtube.com");
  },

  search_video: function (query, callback) {
    request(`https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=${encodeURIComponent(query)}&key=${yt_api_key}`, (error, response, body) => {
      const json = JSON.parse(body);
      if (!json.items[0]) callback("3_-a9nVZYjk");
      else {
        callback(json.items[0].id.videoId);
      }
    });
  },
}