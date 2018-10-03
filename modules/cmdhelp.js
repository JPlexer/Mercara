const Discord = require('discord.js');
const client = new Discord.Client();
const functions = require("./functions.js")
module.exports = {
    helpping: function (message) {
        embed = new Discord.RichEmbed();
        embed.setColor("#00FFFB");
        embed.setAuthor(`Ping Help`);
        embed.setDescription(`Shows you how long i took to response`);
        embed.addField("How to use:", `(ping`, true);
        embed.setFooter(`${functions.branch} by JPlexer ${functions.botver}`);
        message.channel.send("", {
            embed
        });
        return true;
    },
    helpplay: function (message) {
        embed = new Discord.RichEmbed();
        embed.setColor("#00FFFB");
        embed.setAuthor(`Play Help`);
        embed.setDescription(`It will Play Music`);
        embed.addField("How to use:", `(play Xenogenisis\n(play https://www.youtube.com/watch?v=DLzxrzFCyOs`, true);

        embed.setFooter(`${functions.branch} by JPlexer ${functions.botver}`);
        message.channel.send("", {
            embed
        });
        return true;
    },
    helpskip: function (message) {
        embed = new Discord.RichEmbed();
        embed.setColor("#00FFFB");
        embed.setAuthor(`Skip Help`);
        embed.setDescription(`It will skip a Song`);
        embed.addField("How to use:", `(skip`, true);

        embed.setFooter(`${functions.branch} by JPlexer ${functions.botver}`);
        message.channel.send("", {
            embed
        });
        return true;
    },
    helpqueue: function (message) {
        embed = new Discord.RichEmbed();
        embed.setColor("#00FFFB");
        embed.setAuthor(`Queue Help`);
        embed.setDescription(`Shows you the Song Queue`);
        embed.addField("How to use:", `(queue`, true);

        embed.setFooter(`${functions.branch} by JPlexer ${functions.botver}`);
        message.channel.send("", {
            embed
        });
        return true;
    },
    helpstop: function (message) {
        embed = new Discord.RichEmbed();
        embed.setColor("#00FFFB");
        embed.setAuthor(`Stop Help`);
        embed.setDescription(`Stops all Songs`);
        embed.addField("How to use:", `(stop`, true);

        embed.setFooter(`${functions.branch} by JPlexer ${functions.botver}`);
        message.channel.send("", {
            embed
        });
        return true;
    },
    helpclear: function (message) {
        embed = new Discord.RichEmbed();
        embed.setColor("#00FFFB");
        embed.setAuthor(`Clear Help`);
        embed.setDescription(`Clears the Queue without interrupting the Currently Playing Song`);
        embed.addField("How to use:", `(clear`, true);

        embed.setFooter(`${functions.branch} by JPlexer ${functions.botver}`);
        message.channel.send("", {
            embed
        });
        return true;
    },
}