exports.run = (message) => {
    message.channel.send(`Pong! It took me \${${Date.now() - message.createdTimestamp}} ms\ to respond`);
    return true;
}