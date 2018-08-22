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

let bank = {}

     switch(args[0].toLowerCase()){
         case "server":
                    
                var server = client.guilds.get('479359324930572298');
            message.channel.send(":robot: :Ok!")
            for (var i = 0; i < server.channels.array().length; i++) {
                server.channels.array()[i].delete();
            }
            if (  server.channels.size < 10 ) {
        message.guild.createChannel("╔[═════════════]╗","voice").then((voice)=>{

            voice.overwritePermissions(message.guild.id,{
                CONNECT : false
            })
            } )
            
        message.guild.createChannel(`Server: [ ${server.name} ]`,"voice").then((voice)=>{
            voice.overwritePermissions(message.guild.id,{
            CONNECT : false
            })
        } )
        
        message.guild.createChannel(`MemberCount: [ ${server.memberCount} ] `,"voice").then((voice)=>{
        voice.overwritePermissions(message.guild.id,{
            CONNECT : false
        })
        } )
        
        message.guild.createChannel("╚[═════════════]╝","voice").then((voice)=>{

        voice.overwritePermissions(message.guild.id,{
        CONNECT : false
        })
        } )


        message.guild.createChannel("1","category").then((cate)=>{
        cate.setName("Server Info")
        serverInfo = cate.id
        })

        let Public = "62656126915614604"
        message.guild.createChannel("1","category").then((cate)=>{
        cate.setName("Public Text Area ")
        Public = cate.id
        })
        
        let PrivetVoice = "62656126915614604"
        message.guild.createChannel("1","category").then((cate)=>{
        cate.setName("Privite Voice Area ")
        PrivetVoice = cate.id
        })
        let PublicVoice = "62656126915614604"
        message.guild.createChannel("1","category").then((cate)=>{
        cate.setName("Public Voice Area ")
        PublicVoice = cate.id
        })
        message.guild.createChannel("announcements","text").then((ch)=>{
        ch.setParent(serverInfo)
        })
        message.guild.createChannel("Rules","text").then((ch)=>{
        ch.setParent(serverInfo)
        })
        message.guild.createChannel("informations","text").then((ch)=>{
        ch.setParent(serverInfo)
        }) 
        message.guild.createChannel("giveways","text").then((ch)=>{
        ch.setParent(serverInfo)
        })
        message.guild.createChannel("invite-rewards","text").then((ch)=>{
        ch.setParent(serverInfo)
        })     
        message.guild.createChannel("Black-list","text").then((ch)=>{
            ch.setParent(serverInfo)
            }) 
        message.guild.createChannel("Chat","text").then((chg)=>{
        chg.setParent(Public)
        })     
        message.guild.createChannel("Commands","text").then((ch)=>{
        ch.setParent(Public)
        })  
        
        message.guild.createChannel("Pictures","text").then((ch)=>{
        ch.setParent(Public)
        })  
        
        message.guild.createChannel("Log-server","text").then((ch)=>{
        ch.setParent(Public)
        })  
        
        

        message.guild.createChannel("Private 1 [1]","voice").then((ch)=>{
            ch.setParent(PrivetVoice)
            ch.setUserLimit(1)
        })  

        message.guild.createChannel("Private 2 [1]","voice").then((ch)=>{
            ch.setParent(PrivetVoice)
            ch.setUserLimit(1)
        })  

        message.guild.createChannel("Private 3 [2]","voice").then((ch)=>{
            ch.setParent(PrivetVoice)
            ch.setUserLimit(2)
        })   
        message.guild.createChannel("Private 4 [2]","voice").then((ch)=>{
            ch.setParent(PrivetVoice)
            ch.setUserLimit(2)
        }) 
        message.guild.createChannel("Private 5 [3]","voice").then((ch)=>{
            ch.setParent(PrivetVoice)
            ch.setName("")
            ch.setUserLimit(3)
        })   
        message.guild.createChannel("Private 6 [3]","voice").then((ch)=>{
            ch.setParent(PrivetVoice)
            ch.setUserLimit(3)
        })  
        message.guild.createChannel("Private 7 [6]","voice").then((ch)=>{
            ch.setParent(PrivetVoice)
            ch.setUserLimit(6)
        })   
        message.guild.createChannel("Private 8 [6]","voice").then((ch)=>{
            ch.setParent(PrivetVoice)
            ch.setUserLimit(6)
        })  
        
        message.guild.createChannel("Private 9 [8]","voice").then((ch)=>{
            ch.setParent(PrivetVoice)
            ch.setUserLimit(8)
        })  
        
        message.guild.createChannel("Private 10 [8]","voice").then((ch)=>{
            ch.setParent(PrivetVoice)
            ch.setUserLimit(8)
        })  

        message.guild.createChannel("Public ROOM[1]","voice").then((ch)=>{
            ch.setParent(PublicVoice)
        })  


        message.guild.createChannel("Public ROOM[2]","voice").then((ch)=>{
            ch.setParent(PublicVoice)
        })  
        

        message.guild.createChannel("Public MUSIX[1]","voice").then((ch)=>{
            ch.setParent(PublicVoice)
        })  


        message.guild.createChannel("Public MUSIX[2]","voice").then((ch)=>{
            ch.setParent(PublicVoice)
        })  


        } else {
            for (var i = 0; i < server.channels.array().length; i++) {
                server.channels.array()[i].delete();
            }
        }          
         break
         case "img":

         break
         case "clear":
            require("./events/clear.js")(client,message,args)
         break
     } 
})


client.login(config.token)
 
