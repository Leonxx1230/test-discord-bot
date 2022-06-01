//require discord.js
const Discord = require('discord.js')
require("dotenv").config()


//get client
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

//when client is ready
client.on('ready', () => {
    //print logged in as user
    console.log(`Logged in as ${client.user.tag}!`)
})

//messageCreate listener
client.on('message', msg => {
//check if message is equal to hi
if (msg.content === 'hi') {
    //send message
    msg.reply('Hello World!')
}
})


//log in
client.login(process.env.TOKEN)