exports.run = (client, message, args) => {
    message.channel.send(`Pong! It took me \${${Date.now() - message.createdTimestamp}} ms\ to respond`);
    return true;
}