const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", message => {
  if (message.author.id === "338961848168742922") message.reply("test");
});

client.login(process.env.BOT_TOKEN);
