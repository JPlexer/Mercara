exports.run = async (client, message, args) => {
    const msg = await message.channel.send("Ping?");
    setTimeout(function() {
    msg.edit(`Pong! It took me ${Date.now() - message.createdTimestamp} ms to respond`);
   }, 500);
  };
  
  exports.help = {
    name: "ping",
    category: "General",
    description: "It like... Pings. Then Pongs. And it's not Ping Pong.",
    usage: "ping"
  };