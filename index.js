const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", message => {
  if (message.author.id === "293181883871920128") message.reply("hello creator-boy");
});

if (message.conent.indexOf("\ban") === 0) {
   var userToBan = message.content.slice(5);
   //userToBan will be the string of what they typed after ban. 
}

client.login(process.env.BOT_TOKEN);
