const Discord = require("discord.js");
exports.run = (client, message, args) => {
    //message.channel.send(`Pong! It took me \${${Date.now() - message.createdTimestamp}} ms\ to respond`);
    embed = new Discord.RichEmbed();
        embed.setColor("#00FFFB");
        embed.setAuthor(`${config.branch} Ping`);
        embed.addField("Pong!", `It took me \`${`${Date.now() - message.createdTimestamp}`} ms\` to respond`, true);
        embed.setFooter(`${config.branch} by JPlexer ${config.botver}`);
        message.channel.send("", {
            embed
        });
        return true;
}