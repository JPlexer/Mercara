exports.run = async (client, message, args) => { 
message.channel.send(`= ABOUT =
• Creator     :: JPlexer
• Version     :: ${client.config.botver}
• Bot User    :: ${client.config.branch}
• Inspired by :: AstralEars by vicr123 and WhyBot by JPlexer`, {code: "asciidoc"});
  };
  
  exports.help = {
    name: "about",
    category: "Miscelaneous",
    description: "About this Bot",
    usage: "about"
  };