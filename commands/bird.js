const superagent = require("snekfetch");

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
    superagent.get('http://random.birb.pw/tweet/')
        .end((err, response) => {
          message.channel.send({ file: `https://random.birb.pw/img/${response.body}` });
        });
}

exports.help = {
    name: "bird",
    category: "Pix",
    description: "Post a random image of a bird",
    usage: "bird"
};