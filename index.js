const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

  client.user.setActivity("o choro dos inimigos", {type: 2}); //type 1 = jogando,   type 2 = ouvindo, type 3 = assistindo
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('NDU4MjQzNDc3NzU1Mzk2MTA2.DgoE9g.Cy9lm4zLMI203L6pzaBj6XLyCOg');
