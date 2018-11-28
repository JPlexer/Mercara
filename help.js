exports.run = (client, message, args, level) => {
    if (!args[0]) {
      const commandNames = client.commands.keyArray();
      const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
  
      let currentCategory = "";
      let output = `= Command List =\n\n[Use ${client.config.prefix}help <commandname> for details]\n`;
      const sorted = client.commands.array().sort((p, c) => p.help.category > c.help.category ? 1 :  p.help.name > c.help.name && p.help.category === c.help.category ? 1 : -1 );
      sorted.forEach( c => {
        const cat = c.help.category.toProperCase();
        if (currentCategory !== cat) {
          output += `\u200b\n== ${cat} ==\n`;
          currentCategory = cat;
        }
        output += `${client.config.prefix}${c.help.name}${" ".repeat(longest - c.help.name.length)} :: ${c.help.description}\n`;
      });
      message.channel.send(output, {code: "asciidoc", split: { char: "\u200b" }});
    } else {
      let command = args[0];
      if (client.commands.has(command)) {
        command = client.commands.get(command);
        message.channel.send(`= ${command.help.name} = \n${command.help.description}\nusage :: ${command.help.usage}\n= ${command.help.name} =`, {code:"asciidoc"});
      }
    }
  };

  exports.help = {
    name: "help",
    category: "System",
    description: "Displays all the available commands for you.",
    usage: "help [command]"
  };