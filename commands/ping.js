exports.run = (message) => {
    embed = new Discord.RichEmbed();
    embed.setColor("#00FFFB");
    embed.setAuthor(`${functions.branch} Ping`);
    embed.addField("Pong!", `It took me \`${`${Date.now() - message.createdTimestamp}`} ms\` to respond`, true);
    embed.setFooter(`${functions.branch} by JPlexer ${functions.botver}`);
    message.channel.send("", {
        embed
    });
    return true;
}