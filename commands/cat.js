
exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
    const { get } = require('snekfetch')
        .get('https://nekos.life/api/v2/img/meow')
        .end((err, response) => {
            message.channel.send(response.body.url);
        });
}

exports.help = {
    name: "cat",
    category: "Pix",
    description: "Post a random image of a cat",
    usage: "cat"
};