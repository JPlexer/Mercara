exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
    const { get } = require('snekfetch')
    .get('https://api-to.get-a.life/meme')
        .end((err, response) => {
          message.channel.send(response.body.url);
        });
}

exports.help = {
    name: "meme",
    category: "Pix",
    description: "Post a random image of the best images... MEMES",
    usage: "meme"
};