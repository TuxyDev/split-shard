const Discord = require('discord.js');
const client = new Discord.Client();
const token = require("./config.json").token;

client.on('ready', async () => {
    
});

client.on('message', async (message) => {
    if (!message.author.bot && message.content === "!ping") {
        console.log(`ponged ${message.author.tag}!`);
        return message.channel.send("pong!");
    }
})

client.login(token);