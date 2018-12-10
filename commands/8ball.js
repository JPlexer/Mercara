const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    var rnd = getrandomint(5);
    console.log(rnd);
    if(rnd===1) message.channel.send("No.");
    else if(rnd===2) message.channel.send("Not Probable.");
    else if(rnd===3) message.channel.send("Maybe.");
    else if(rnd===4) message.channel.send("Probably.");
    else if(rnd===5) message.channel.send("Yes.");
};

exports.help = {
    name: "8ball",
    category: "Fun",
    description: "Ask a Question! It will answer it.",
    usage: "8ball [question]"
};