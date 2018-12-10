exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
    const { get } = require('snekfetch')
    .get('https://random-d.uk/api/v1/random?type=jpg')
        .end((err, response) => {
          message.channel.send(response.body.url);
        });
}

exports.help = {
    name: "duck",
    category: "Pix",
    description: "Post a random image of a duck",
    usage: "duck"
};