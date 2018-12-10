exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    const { get } = require('snekfetch')
    .get('https://animals.anidiots.guide/panda')
        .end((err, response) => {
          message.channel.send( response.body.link );
        });
}

exports.help = {
    name: "panda",
    category: "Pix",
    description: "Post a random image of a panda",
    usage: "panda"
};