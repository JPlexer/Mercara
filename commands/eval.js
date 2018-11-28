const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    if (message.author.id != client.config.botowner) return message.channel.send("**Hey " + message.author.username + ", only JPlexer can use that!**");
    const code = args.join(" ");
    try {
        const evaled = eval(code);
        const clean = await client.clean(client, evaled);
        message.channel.send(`\`\`\`js\n${clean}\n\`\`\``);
    } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${await client.clean(client, err)}\n\`\`\``);
    }
};

exports.conf = {
    aliases: ["exec"]
  };

exports.help = {
    name: "eval",
    category: "System",
    description: "Evaluates arbitrary javascript.",
    usage: "eval [...code]"
};