exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
    const { get } = require('snekfetch')
    .get('https://nekos.life/api/v2/img/lizard')
        .end((err, response) => {
          message.channel.send( response.body.url );
        });
}

exports.help = {
    name: "lizard",
    category: "Pix",
    description: "Post a random image of a lizard",
    usage: "lizard"
};