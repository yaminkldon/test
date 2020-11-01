const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://reaction-role9.glitch.me/`);
}, 280000);
 

const Discord = require('discord.js');
const { channelID, message, messageID, TOKEN } = require('./config.js');
const RoleAssignment = require('./roleAssignment.js');
const roleAssigner = new RoleAssignment.RoleAssigner();
const bot = new Discord.Client();

const cacheReactionMessage = async () => {
    const reactionChannel = bot.channels.get(channelID);
    try {
        message = await reactionChannel.fetchMessage(messageID);
        message.reactions.forEach((reaction) => {
            reaction.fetchUsers();
        })
        await console.log(`Fetched and cached message: ${messageID}`);
    } catch (error) {
        console.log(error);
    }
}

bot.on('ready', () => {
    console.log("من قبل كههربا");
    cacheReactionMessage();
});

bot.on('messageReactionAdd', (reaction, user) => {
    if (reaction.message.id == messageID) roleAssigner.grantRole(reaction, user);
});    

bot.on('messageReactionRemove', (reaction, user) => {
    if (reaction.message.id == messageID) roleAssigner.removeRole(reaction, user);
});



bot.on("message", message => {
let KahrbaaID = "";
let prefix = "*";
// Emoji
let e1 = "" // هنا بتحط الايموجي
let e2 = "" // هنا بتحط الايموجي
let e3 = "" // هنا بتحط الايموجي
let e4 = "" // هنا بتحط الايموجي
let e5 = "" // هنا بتحط الايموجي
/////// Roles
let role1 = "<@&>" // هنا هتحط ايدي الرول <@&ID>
let role2 = "<@&>" // هنا هتحط ايدي الرول <@&ID>
let role3 = "<@&>" // هنا هتحط ايدي الرول <@&ID>
let role4 = "<@&>" // هنا هتحط ايدي الرول <@&ID>
let role5 = "<@&>" // هنا هتحط ايدي الرول <@&ID>
////////////////////////

    if (message.content.toLowerCase() === prefix + "start") {
      	  if (!KahrbaaID.includes(message.author.id)) return;
        message.delete(5000)
        if(!message.channel.guild) return;
     const embed = new Discord.RichEmbed()
         .setColor('Yellow')
         .setThumbnail("https://getdrawings.com/free-icon/check-all-icon-60.png")
         .setDescription(`**  السـلام عليكـم و رحمـة الله و بركاتـة
         
・ \`\` Reaction Roles - أختار رتبه ال تناسبك   \`\`

>  ${e3} @ | الإشعارات 
・
>  ${e2} @ | التحديثات
・
>  ${e4} @ | القيف اويات
・
>  ${e5} @ | أخبار الافلام , المسلسلات
・
>  ${e1} @ | للمنشنآت العامـة 

**`)
   message.channel.send(embed).then(async msg => {
      msg.react("")
      msg.react("")
      msg.react("")
      msg.react("")
      msg.react()
   })

   }
   });


bot.login(TOKEN);
