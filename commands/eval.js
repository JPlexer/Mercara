const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    if (message.author.id != client.config.botowner) return message.channel.send("**Hey " + message.author.username + ", only JPlexer can use that!**");
    const code = args.join(" ");
    try {
      const evaled = eval(code);
      const clean = await client.clean(client, evaled);

    let embed = new Discord.RichEmbed()
        .addField(`:arrow_down:Input`, "***```" + code + "```***", true)
        .addField(`:arrow_up:Output`, `\`\`\`js\n${clean}\n\`\`\``, )
        .setColor("#00FFFB") //
        .setTimestamp()

    message.channel.send(embed);
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${await client.clean(client, err)}\n\`\`\``);
    }
  };
  
  exports.help = {
    name: "eval",
    category: "System",
    description: "Evaluates arbitrary javascript.",
    usage: "eval [...code]"
  };