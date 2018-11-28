module.exports = (client) => {
    console.log(`I like to be a part of the ara family! Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
    client.user.setActivity(
        `${client.config.prefix}help| ${client.config.botver}`, {
        type: "LISTENING"
      });
      if (!guild[message.guild.id]) {
        guild[message.guild.id] = {
          queue: [],
          queueNames: [],
          isPlaying: false,
          dispatcher: null,
          voiceChannel: null,
          skipReq: 0,
          skippers: []
        };
      };  
  }