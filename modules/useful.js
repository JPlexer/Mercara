const Discord = require('discord.js');
const client = new Discord.Client();
const functions = require("./functions.js")

module.exports = {
    ping: function (message) {
        embed = new Discord.RichEmbed();
        embed.setColor("#00FFFB");
        embed.setAuthor(`${functions.branch} Ping`);
        embed.addField("Pong!", `It took me \`${`${Date.now() - message.createdTimestamp}`} ms\` to respond`, true);
        embed.setFooter(`${functions.branch} by JPlexer ${functions.botver}`);
        message.channel.send("", {
            embed
        });
        return true;
    },
    help: function (message) {
        embed = new Discord.RichEmbed();
        embed.setColor("#00FFFB");
        embed.setAuthor(`${functions.branch} Help`);
        embed.setDescription(`You can use this commands with ${functions.branch}. Just type in ${functions.prefix}[command]! For help with a Special Command type in ${functions.prefix}help [command]`);
        embed.addField("Commands", "help\nping\nplay\nskip\nstop\nclear\nqueue", true);


        embed.setFooter(`${functions.branch} by JPlexer ${functions.botver}`);
        message.channel.send("", {
            embed
        });
        return true;
    },
    say: async function (message, args2) {
        message.delete();
        if (message.author.id != 348065394520621067) return message.channel.send("**Hey " + message.author.username + ", only JPlexer can use that!**");
        message.channel.send(args2)
        .catch(error => message.channel.send(`Error: ${error}`));
    }
}