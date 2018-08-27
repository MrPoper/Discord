const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.on("ready", () => {
    console.log('╔[════════════════════════════════════]╗');
    console.log('')
    console.log('            ╔[════════════]╗')
    console.log('              Bot Is Online')
    console.log('            ╚[════════════]╝')
    console.log('')
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('')
    console.log(`servers! [ " ${client.guilds.size} " ]`);
    console.log('')
    console.log(`Users! [ " ${client.users.size} " ]`);
    console.log('')
    console.log('╚[════════════════════════════════════]╝')
});
client.on("message", message=> {
  var mentionned = message.mentions.users.first()
  if ( message.author.equals(client.user) ) return ;
  if (!message.content.startsWith(config.prefix)) return ;
  const args = message.content.substring(config.prefix.length).split(" ");       


     switch(args[0].toLowerCase()){
         case "sug":
         
         message.channel.sendMessage("", {embed: {
            title: "` ➡ `** Suggestions System **",
            color: 0x06DF00,
            timestamp: new Date(),
            description:"قم بإرسال الاقتراح الان ",
            footer: {
              icon_url: client.user.avatarURL,
              text: "© BIOS BOT"
            }
          }}).then(fristMessege =>{
            let filter = m => m.author.id === message.author.id

                message.channel.awaitMessages(filter ,{max:1,time:30000,error:['time'],} ).then(col=>{
                    messagecollter = col.first().delete()
                    let Sugge12 =  col.first()
                    let Suggestions =  col.first().toString().split("\n").join("\n ­­­‍‍‍‍ ‍‍‍‍ ‍‍‍‍ ‍‍‍‍ ‍‍‍‍ ‍‍‍‍  ‍‍‍‍  ‍  ")
                    const embed = new Discord.RichEmbed()
                 
                    .setTitle("`` ➡ Suggestions System ``")
                    .setColor(0x06DF00) 
                    .addField("** ╔[══════════  ! إقتراح جديد  ══════════]╗**","📢"+Suggestions+"   \n ")
                    .addField("** ╚[═══════════════════════════]╝**",`    ${message.author.username} :تم الاقترآح بواسطة \:floppy_disk:` )
                    .setFooter(message.author.tag,message.author.avatarURL)
                    .setTimestamp()
                    message.channel.send({embed}).then((none)=>{
                      none.react(message.guild.emojis.find("name","true"))
                      none.react(message.guild.emojis.find("name","false"))
                      none.react("\:false:")
                        fristMessege.delete()
                        message.delete()
                      })
                      })/*.catch(err=>{
                        message.channel.send("يرجى اعادة المحاولة - ⏲ ")
                })*/
            })   
         
         break
         case "clear":

         if (!(args[1])) return  message.channel.send("Please writ count len")
         message.channel.send("Dou you Have Clear chat ?").then((msg)=>{
            msg.react("✅")
            msg.react("❌")
            let YESFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;              
        let YES = msg.createReactionCollector(YESFilter,{
            time:12000
            })
            let NOFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;              
            let NO = msg.createReactionCollector(NOFilter,{
                time:12000
             })
             YES.on("collect",(collect)=>{
                message.channel.bulkDelete(args[1]).catch((err)=> {console.log(err)})
          })
          NO.on("collect",(collect)=>{
             msg.delete()
             message.delete()
             })
        })
         break
     } 
})
client.on("message", message=> {
  if (message.content.startsWith("./sayTo")) {
    let filter = m => m.author.id === message.author.id
    let channelBOT = ""
    let messageBOT = ""
    message.channel.send(("", {embed: {
      title: "` ➡ `** Messege System **",
      color: 0x06DF00,
      timestamp: new Date(),
      description:"قم بكتابة ايدي الغرفة",
      footer: {
        icon_url: client.user.avatarURL,
        text: "© Codes BOT"
      }} 
    })).then((messageArray1)=>{
        message.delete(/*Codes*/)
        message.channel.awaitMessages(filter ,{max:1,time:30000,error:['time'],} ).then(pop1=>{
          channelBOT = pop1.frist().mentionned.channels.first()
          pop1.first().delete(/*Codes*/)
          messageArray1.delete(/*Codes*/)
          message.channel.send(("", {embed: {
            title: "` ➡ `** Messege System **",
            color: 0x06DF00,
            timestamp: new Date(),
            description:"قم بكتابة الرسالة",
            footer: {
              icon_url: client.user.avatarURL,
              text: "© Codes BOT"
            }} 
          })).then((messageArray2)=>{
            message.channel.awaitMessages(filter ,{max:1,time:30000,error:['time'],} ).then(pop2=>{
              messageBOT = pop2.first(/*Codes*/)
              pop2.first().delete(/*Codes*/)
              messageArray2.delete(/*Codes*/)
            message.guild.channels.find("id",channelBOT.toString()).sendMessage(messageBOT.toString())
                })
            })
        })
     })
    }
})

client.login(config.token)
 
