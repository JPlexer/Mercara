const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
  setGame: function (client) {
    client.user.setActivity(
      `${module.exports.prefix}help| ${module.exports.botver}`, {
      type: "LISTENING"
    });
  },
  prefix: "mc:",
  botver: "v.1.0.5",
  branch: "Mercara",
}