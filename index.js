//require discord.js
const Discord = require('discord.js')
require("dotenv").config()

const generateImage = require('./generateImage')


//get client
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
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

const welcomeChannelId = "981577119740067910"

//guildMemberAdd listener
client.on('guildMemberAdd', async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
    content: `<@${member.id}> Welcome to the server!`,
    files: [img]
})
})


//log in
client.login(process.env.TOKEN)