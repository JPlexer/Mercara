
exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
    const { get } = require('snekfetch')
        .get('https://api.bunnies.io/v2/loop/random/?media=gif,png')
        .end((err, response) => {
          message.channel.send(response.body.media.poster);
        });
}

exports.help = {
    name: "bunny",
    category: "Pix",
    description: "Post a random image of a bunny",
    usage: "bunny"
};