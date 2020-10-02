const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

client.once('ready', () => {
    console.log('your bot name is online!');
});


client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'صندوق') {
        message.channel.send('شماره حساب و فلان');
    }
});


client.login(process.env.BOT_TOKEN);