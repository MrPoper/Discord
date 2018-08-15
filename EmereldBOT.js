const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Has Login In Server!`)
    client.user.setActivity(`on ${client.guilds.size} servers`);
    }
);
client.on("guildMemberAdd", (member) => {
   var rolesMemberGroup  = member.guild.roles.find("name","»Members");
   var rolesMemberRow = member.guild.roles.find("name","Member") ;
    member.addRole(rolesMemberRow);
    member.addRole(rolesMemberGroup);
    var channe = member.guild.channels.find("name","✉【logs】");
     var Embed = new Discord.RichEmbed()
         .setDescription("[EMERELD NETWORK]  مرحبا بك في مجتمع امرد ناتورك ")     
        .addField("Name :",member.user)
        .addField("ID :",member.id)
        .setThumbnail(member.avatarURL)
        .setFooter("By Poper")
        .setColor(0x00FF00)
    channe.send(Embed);
});
client.on("guildMemberUpdate", (Old,member,New) => {   

});
client.on('message', message => {
       if ( message.author.equals(client.user) ) return ;
       if (!message.content.startsWith(config.prefix)) return ;
       const args = message.content.substring(config.prefix.length).split(" ");       
       switch(args[0].toLocaleLowerCase()) {
       case "info":
       var Embed = new Discord.RichEmbed()
         .addField("Name :",message.member.user,true)
         .addField("Id :",message.author.id,true)      
         .setFooter("By Poper")
         .setColor(0xFF0000)
         .setThumbnail(message.author.avatarURL);
        message.channel.sendEmbed(Embed);
        break;
     author =  message.author 
        case "get":
        var Errors = new Discord.RichEmbed()
        .setDescription(`❎**SYNTEX : ${config.prefix}get** **\`\`[Youtuber]\`\`**  **\`\`[LINK]\`\`**  or  **\`\`[VIP]\`\`**  `)
        .setFooter("PoperBOT Create By MrPop ")
       // .setThumbnail({file: ["http://ocean-communtiy-rp.ga/uploads/monthly_2018_06/img_21233.png.7184e52cae7c8d9892c86fe18fb9d22b.png"]})
        .setColor(0xFE0000);
        if(!args[1]  ) return message.channel.send(Errors);
        if(message.guild.roles.find("name", `Requist Youtuber ` + message.author.username + ` ` + args[2])) return  message.channel.send("يرجى الانتضار لقد تم تقديم طلبك ⚠"); 
         if (args[1] == "Youtuber" ) {
            if(!args[2]  ) return message.channel.send(Errors);   
                message.channel.send(  "   سوف نرد عليك في اقرب وقت "  + `[ ${args[1]} ]` + " لقد قمة بتقديم طلب على" )
                message.guild.createRole({
                    name: ` Requist Youtuber ` +   `${message.author.username}` + ` ` + args[2],
                    color: "0x550149"
                  })
                  var channe = message.guild.channels.find("name","✉【player-requist】");
                  var requist = new Discord.RichEmbed()
                  .setDescription(`Submit an application`)
                  .addField("Requist to :", `[ ${args[1]} ]`,true)
                  .addField("The Member :", `[ ${message.author.username} ]`,true)
                  .addField("ID :", `[  ${message.author.id} ]`,false)
                  .addField("user :", `[  ${message.author.tag} ]`,true)
                  .setFooter("PoperBOT Create By MrPop ")
                 // .setThumbnail({file: ["http://ocean-communtiy-rp.ga/uploads/monthly_2018_06/img_21233.png.7184e52cae7c8d9892c86fe18fb9d22b.png"]})
                  .setColor(0x00DA00)
                  channe.send(requist)
            } 
            if (args[1] == "VIP" ) {
                message.channel.send(  "   سوف نرد عليك في اقرب وقت "  + `[ ${args[1]} ]` + " لقد قمة بتقديم طلب على" )
                message.guild.createRole({
                    name: ` Requist Youtuber ` +   `${message.author.username}` + ` ` + args[2],
                    color: "0x550149"
                  })
                  var channe = message.guild.channels.find("name","✉【player-requist】");
                  var requist = new Discord.RichEmbed()
                  .setDescription(`Submit an application`)
                  .addField("Requist to :", `[ ${args[1]} ]`,true)
                  .addField("The Member :", `[ ${autre.username} ]`,true)
                  .addField("ID :", `[  ${autre.id} ]`,false)
                  .addField("user :", `[  ${message.autre.tag} ]`,true)
                  .setFooter("PoperBOT Create By MrPop ")
                 // .setThumbnail({file: ["http://ocean-communtiy-rp.ga/uploads/monthly_2018_06/img_21233.png.7184e52cae7c8d9892c86fe18fb9d22b.png"]})
                  .setColor(0x00DA00)
                  channe.send(requist);
            } 
        break;
    case "set":
    if ( message.author.id !== args[1] ) return message.channel.sendMessage("Player Not Found")
            if ( message.author.id == args[1] ) {
                message.user.args[1].sendMessage("Test")
            }
   case "clear":
    var aErer = new Discord.RichEmbed()
        .setDescription(`❎**SYNTEX : ${config.prefix}clear ** **\`\`[Valuer]\`\`**   `)
        .setFooter("PoperBOT Create By MrPop ")
        .setColor(0xFE0000);
    if (!args[1]) return message.channel.send(aErer)
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return channel.message.send("ليس لديك صليحة ⚠")
        message.channel.bulkDelete(args[1])
    break;
    case "help":
    var Errorss = new Discord.RichEmbed()
        .addField("","HELP-SYSTEM",true)
        .setDescription(`لقد تم انشاء نضام المساعدة بسب عدم معرفة الناس لبعض الاوار  `)
        .setDescription(`❎**SYNTEX : ${config.prefix}الامر هنا `)        
        .setDescription("ADMIN : `clear` , `set`  ")
        .setDescription("Member : `info` , `get`  ")        
        .setFooter("PoperBOT Create By MrPop v1.0.0 ")
        .setColor(0xFE0000);
    message.channel.send(Errorss)
    break
       default:message.channel.send("Invalid Command!") ;

    };

});
client.on("message", function(message) {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let anarg = message.content.split(" ").slice(2);
    let toSend = message.mentions.users.first();
            
             var currentTime = new Date(),
              hours = currentTime.getHours() + 2 ,
              minutes = currentTime.getMinutes(),
              seconds = currentTime.getSeconds(),
              Year = currentTime.getFullYear() - 2000,
              Month = currentTime.getMonth() + 1,
              Day = currentTime.getDate();
              var suffix = 'AM';
              if (hours >= 12) {
                 suffix = 'PM';
                  hours = hours - 12;
             }
              if (hours == 0) {
                  hours = 12;
              }
    let xFive = new Discord.RichEmbed()
        .setColor("ORANGE")
        .setAuthor(message.author.username,message.author.avatarURL)
        .setThumbnail(message.author.avatarURL)
        .setFooter("SenioR TeaM. || "+"- "+Month+"."+Year+"."+Day+" -"+hours+":"+minutes+" "+suffix)
        .addField("**• الرسالة**","**"+anarg+"**")
        .addField("**• المرسل**","<@"+message.author.id+">")
        .addField("**• التاريخ**",Day+"/"+Month+"/"+Year+" | "+hours+":"+minutes+":"+seconds+" "+suffix)
    if(command === `${config.prefix}message`) {
        if(toSend.bot) return message.reply("**# You cannot send a message to a bot!** 🎇");
        if(anarg < 1) return message.reply("**# Please , Specify a valid arguments!** 🎇");
        //if(toSend === message.author) return message.reply("**# You cannot send a message to yourself**");
        toSend.send({embed:xFive});
        message.reply("** ✅ , Sent a Message to **<@"+toSend.id+">")
     }
    });
client.login(config.token)
