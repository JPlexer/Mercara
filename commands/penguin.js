exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
    const { get } = require('snekfetch')
    .get('https://animals.anidiots.guide/penguin')
        .end((err, response) => {
          message.channel.send( response.body.link );
        });
}

exports.help = {
    name: "penguin",
    category: "Pix",
    description: "Post a random image of a penguin",
    usage: "penguin"
};