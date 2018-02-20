const Discord = require("discord.js");
const client = new Discord.Client();
module.exports.run = (client, message, args) => {
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You do not have the ability to do that.");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("Looks like I do have the ability.");
  let user = message.mentioned.users.first();
  let reason = args.slice(1).join(" ");
  let modlog = client.channels.find("name", "log");
  
if(!modlog) return message.reply("Looks like there is no log here");
if (message.mentions.users.size <1) return message.replay("You need to mention someone, dummy");
if(!reason) return message.reply ("Why should I kick this person?");
if (!message.guild.member(user)
.kickable) return message.reply("I cannot kick someone that is well above my power");
  
message.guild.member.(user).kick();
  
const kickembed = new Discord.Richembed()
.setAuthor(`I kicked ${user.username}`, user.displayAvatarURL)
.addField("Kick Information", `**Kicked User:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);
modlog.send({
  embed : kickembed
  
module.exports.help = {
  name: "kick"
  
}

client.on("message", message => {
  if (message.author.id === "293181883871920128") message.reply("hello creator-boy");
});

client.login(process.env.BOT_TOKEN);
