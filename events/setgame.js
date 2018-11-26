module.exports = {
    setGame: function (client) {
      client.user.setActivity(
        `${module.exports.prefix}help| ${module.exports.botver}`, {
        type: "LISTENING"
      });
    }
}