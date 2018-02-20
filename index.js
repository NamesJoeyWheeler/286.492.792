const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", message => {
  if (message.author.id === "293181883871920128") message.reply("hello creator-boy");
  if (message.author.id === "292545042059624449") message.reply("hello jonsey-boy");
});

client.login(process.env.BOT_TOKEN);
