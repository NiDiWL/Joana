const Discord = require('discord.js');
const client = new Discord.Client();
const { members } = require('./lista_de_membros.json');
client.on('ready', () => {

  client.user.setActivity('o choro dos inimigos', {type: 2}); //type 1 = jogando,   type 2 = ouvindo, type 3 = assistindo
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`Logged in as ${client.guilds.get('439309351698694144').members.get('157671599124774912').displayName}!`);
  console.log(`Logged in as ${client.guilds.get('439309351698694144').members[0]}!`);
  // for (var member in client.guilds.get('439309351698694144').members){
  //   console.log('x')
  // }
  // for (i = 0; i < cars.length; i++) {
  //   text += cars[i] + "<br>";
  // }
  client.guilds.get('439309351698694144').members.map(function(guildMember) {
    if (members.some(function(member) { return guildMember.displayName.indexOf(member) > -1; })) {
      console.log (`É membro: ${guildMember.displayName}`);
    } else {
      console.log (`Não é membro: ${guildMember.displayName}`);
    }
  });
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('NDU4MjQzNDc3NzU1Mzk2MTA2.DgoE9g.Cy9lm4zLMI203L6pzaBj6XLyCOg');
