
exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
    const { get } = require('snekfetch')
    .get('https://randomfox.ca/floof/')
        .end((err, response) => {
          message.channel.send(response.body.image);
        });
}

exports.help = {
    name: "fox",
    category: "Pix",
    description: "Post a random image of a fox",
    usage: "fox"
};