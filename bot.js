const Discord = require('discord.js');
const client = new Discord.Client();
const guilds = {};
const cmdhelp = require("./modules/cmdhelp.js")
const func = require("./modules/functions.js")
const prefix = func.prefix;
const setGamef = func.setGame;
const usef = require("./modules/useful.js")
const eval = require("./modules/evil.js")
const music = require("./modules/music.js")

client.on('ready', () => {
  console.log('Ready!')
  setGamef(client);
});

client.login(process.env.BOT_TOKEN);

client.on('message', message => {
  //just some Variables
  const lc = message.content.toLowerCase();
  const args = message.content.split(' ').slice(1).join(" ");
  const args2 = message.content.split(' ').slice(1);

  if (!guilds[message.guild.id]) {
    guilds[message.guild.id] = {
      queue: [],
      queueNames: [],
      isPlaying: false,
      dispatcher: null,
      voiceChannel: null,
      skipReq: 0,
      skippers: []
    };
  }

  if (lc.startsWith(`${prefix}ping`)) {
    usef.ping(message);

  } else if (lc.startsWith(`${prefix}help ping`)) {
    cmdhelp.helpping(message);

  } else if (lc === `${prefix}help`) {
    usef.help(message);
    
  } else if (lc === `${prefix}help`) {
    usef.say(message);

  } else if (lc.startsWith(`${prefix}eval`)) {
    if (lc.includes(`token`)) {
      message.reply(`No Never Ever!`);
      return true;
    } else {
    eval(client, message, args2);
    }

  } else if (lc.startsWith(`${prefix}play`)) {
    music.play(message, guilds, args);

  } else if (lc.startsWith(`${prefix}help play`)) {
    cmdhelp.helpplay(message);

  } else if (lc.startsWith(`${prefix}skip`)) {
    music.skip(message, guilds);

  } else if (lc.startsWith(`${prefix}help skip`)) {
    cmdhelp.helpskip(message);

  } else if (lc.startsWith(`${prefix}queue`)) {
    music.queue(message, guilds);

  } else if (lc.startsWith(`${prefix}help queue`)) {
    cmdhelp.helpqueue(message);

  } else if (lc.startsWith(`${prefix}stop`)) {
    music.stop(message, guilds);

  } else if (lc.startsWith(`${prefix}help stop`)) {
    cmdhelp.helpstop(message);

  } else if (lc.startsWith(`${prefix}clear`)) {
    music.clear(message, guilds);

  } else if (lc.startsWith(`${prefix}help clear`)) {
    cmdhelp.helpclear(message);
  }
});