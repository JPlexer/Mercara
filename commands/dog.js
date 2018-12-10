exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
    const { get } = require('snekfetch')
    .get('https://dog.ceo/api/breeds/image/random')
        .end((err, response) => {
          message.channel.send(response.body.message);
        });
}

exports.help = {
    name: "dog",
    category: "Pix",
    description: "Post a random image of a dog",
    usage: "dog"
};