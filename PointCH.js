const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
const w = ['./image/mine.png'];


client.on("ready", () => {
  console.log("Iam Ready MRC!")
});


client.on("message", message=> {
  var mentionned = message.mentions.users.first()
  if ( message.author.equals(client.user) ) return ;
  if (!message.content.startsWith(config.prefix)) return ;
  const args = message.content.substring(config.prefix.length).split(" ");       
  if ((message.member.presence.status == "offline" ) ) {
    id = 0
  }
  switch(args[0].toLocaleLowerCase()) {
 case "tip":
 if (!args[1] ){return message.reply("please writ the mention") }
 let evidence = message.content.split(" ").slice(2).join(" ")
 if (evidence < 1) {return message.reply("please writ the messege")   }
  message.delete()
    mentionned.sendMessage(evidence).catch(console.error)
 break
 case "img":
    let id = 0
    const server = message.guild;
    const name = message.author.tag;
    var add = `${id} = ${name}`
    var channel = message.guild.channels.find("name",add)
    if (!(channel)) {
      message.channel.startTyping(3);
          message.channel.sendMessage(`Start : ?
          [YES|NO]`).then((msg)=>{
            message.channel.awaitMessages(response => response.content === "YES", { max: 1,time: 30000,errors: ['time'],}).then(col =>{
             
                  messegeCol = col.first().delete();
                  msg.delete()
           server.createChannel(add,"voice").then((channel)=>{
            message.channel.stopTyping(true)
                  channel.setParent('479272989758586890');
                  channel.overwritePermissions(message.guild.id,{
                    CONNECT: false 
                })
                setInterval(time=>{
                  if (!(message.member.presence.status == "offline" ) ) {
                    id++;   
                    channel.setName(`${id} = ${name}`)
                  }
                } )
              })
            })
          })
        }else
        message.reply("you have channel")
    
 break
 default: message.channel.sendMessage("", {embed: {
  title: "`` Error 5x18z ``",
  color: 0x06DF00,
  description: "\:x: the commend is not defined ",
}})
    }
})


client.login(config.token)
 
