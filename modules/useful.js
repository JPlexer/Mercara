const Discord = require('discord.js');
const client = new Discord.Client();
const functions = require("./functions.js")

module.exports = {
    ping: function (message) {
        embed = new Discord.RichEmbed();
        embed.setColor("#00FFFB");
        embed.setAuthor(`Pong!`);
        embed.addField("", `It took me \`${`${Date.now() - message.createdTimestamp}`} ms\` to respond`, true);
        embed.setFooter(`${functions.branch} by JPlexer ${functions.botver}`);
        message.channel.send("", {
            embed
        });
        return true;
    },
    help: function (message) {
        embed = new Discord.RichEmbed();
        embed.setColor("#00FFFB");
        embed.setAuthor(`${functions.branch} Hilfe`);
        embed.setDescription(`You can use this commands with ${functions.branch}. Just type in ${functions.prefix}[command]! For help with a Special Command type in ${functions.prefix}help [command]`);
        embed.addField("Commands", "help\nping\nplay\nskip\nstop\nclear\nqueue", true);


        embed.setFooter(`${functions.branch} by JPlexer ${functions.botver}`);
        message.channel.send("", {
            embed
        });
        return true;
    }
}