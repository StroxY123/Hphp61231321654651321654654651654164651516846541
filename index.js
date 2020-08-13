const commando = require('discord.js-commando');
const discord = require('discord.js');
const moment = require('moment');
moment.locale('hu')
let prefix = "%"
var client = new commando.Client ({
    owner: '417073375408816128',
    disabledEvryone: true,
    commandPrefix: '%',
    invite: 'https://discord.gg/wUXP5UX',
    unknownCommandResponse: false


});

process.setMaxListeners(0);

//igaz hamis
client.on("message", message => {
if (message.content.toLowerCase().startsWith("ih")) {
    number = 3;
    var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
      case 1: message.channel.send ("Igaz"); break;
      case 2: message.channel.send ("Hamis"); break;
      case 3: message.channel.send ("Nem tudom"); break;
    }
   }
  });
//igaz hamis https://i.imgur.com/0kvtMLE.gif




//büntető
client.on("message", message => {
  if (message.content.toLowerCase() === prefix+ `büntető`) {
      message.channel.send(`Szia ${message.author.toString()}!! 
      
      Felmerülhet benned az a kérdés, hogy miért kaptad meg a <@&696367970905096293> -t. 
      A válasz egyszerű! 
      Valami olyat csináltá ami a szerver szabályzatába ütközött vagy nagyon toxic viselkedéseddel érdemelted ki! 
      Emellet még lehet: Zaklatás, Mások nyugalmának megzavarása, Trollkodás és még sorolhatnám! Szépen csendbe ülld le a büntetésed azután kérlek menj át az Admin váróba!
      Megértésedet köszönöm! Üdvözlettel: HáP-HáP!`)
  }
});
//büntető




//emotikon
client.on("message", message => {
  if (message.content.toLowerCase().startsWith("ow100lb")) {
      message.channel.send("<:ow100lb:719343188212711544>")
      message.delete();
  }
});
//emotikon




//Üdvözlő 
client.on("message", message => {
  if (message.content.startsWith(prefix + "szia")) {
      message.channel.send(`Szia ${message.author.toString()}! Az én nevem **HáP-HáP**!`)
      message.channel.send("Köszöntelek itt a szerveren. Érezd jól magad!")
      message.channel.send(`Ajánlatos a **%parancsok**- nevű commandot használnod így elsőnek!`)
      message.channel.send(`Majd még a jövőbe találkozunk Szia!`)
      message.react('🦆')

  }
});
//Üdvözlő 
//:szonikface:
//Rang megjelölés <@& id >




//Moderáció

client.on("message", message => {
    if (message.author.bot) return;
    if (message.author.id === "417073375408816128") return;
    if (message.author.id === "513735293132603403") return;
    if (message.author.id === "674997482609967116") return;
    if (message.author.id === "393380978766381061") return;

    let szavak = ["csunya", "kurva", "kurva anyád", "gyökér", "cigány", "bazdmeg", "paraszt", "kutya", "anyád", "balfasz", "baszott", "bazd", "fuck", "mother", "shit", "motherfucker", "fasz", "pina", "te retkes idota", "idiota", "faszopó", "köcsög", "bolond", "buzi", "nyomorék", "csicska", "bazd", "bazdmeg", "basz", "baszadék", "nyomo", "anyukád", "maradvány", "Kulák", "picsa"]
    let talalt = false;
 
    for (var a in szavak) {
         if (message.content.toLowerCase().includes(szavak[a].toLowerCase())) talalt = true;
    }
    if (talalt) {
    message.delete();
    console.log("Csunya szót írtXD :: "+message.member.user.tag + " ");
    message.author.send(`Szia! Ezt ne itt csináld! Máshol hápogj kérlek!! Következőleg megcsíplek! Üdvözlettel: HáP-HáP 🦆`);
    }
});

//Moderáció vége -------------------------------------------------------




//IDK

//registry
client.registry.registerGroup("parancsok", "Parancsok");
client.registry.registerDefaults();
client.registry.registerGroups([
    ['misc', "misc"]
])
client.registry.registerCommandsIn(__dirname + "/commands");
//registry vége





//Indulooo ---------------------------------------------------------------
client.on("ready", () => {
    console.log(".");
    client.user.setActivity("📈The Chat📉", {type: "WATCHING"});
});
//Státusz jelzés ---------------------------------------------------------

let activNum = 0;

  setInterval(function() {
   if (activNum ===0) {
      client.user.setActivity("🔵 Élőadás itt:", {type: "STREAMING", url:"https://www.twitch.tv/szonik_games"}); 
      activNum = 1;
    } else if (activNum === 1) {
      client.user.setActivity("🔴 Élőadás itt:", {type: "STREAMING", url:"https://www.twitch.tv/szonik_games"}); 
      activNum = 0;
    }
  }, 3* 1000);


client.login(process.env.token)
//Státusz jelzés vége ----------------------------------------------------
//client.user.setActivity("🔵 The Chat 🔴", {type: "WATCHING"});
//parancsok ------------------------------------------------------------

client.on("message", message => {
  if (message.content.toLowerCase() === prefix + 'parancsok') {
    const embed = new discord.RichEmbed()
        .setThumbnail("https://i.pinimg.com/originals/12/50/89/125089ee636b8eaafa296cc62fe21a9f.gif")
        .setTitle('Parancs lista :')
        .setColor('#ffc94a')
        .addField("**%szia**", "Első üdvözlés a bothoz.")
        .addField("**%avatar**", "Megmutatja az avatárodat!")
        .addField("**%GG**", "Előhív egy GG képet!")
        .addField("**%rip**", "Előhív egy RIP képet!")
        .addField("**%idő**", "Meg mutatja a pontos időt.")
        .addField("**%helpme**", "Segítség kérése a Vezetőségtől.")
        .addField("**%botinfo**", "A Bot információjának lekérése.")
        .addField("**%szerverinfo**", "A szerver információjának lekérése.")
        .addField("**%admins**", "A szerveren lévő adminok mutatása.")
        .addField("**%links**", "Szonik elérhetőségei.")
        .addField("**%meghívó**", "Szerver meghívó lekérése.")
        .addField("**%szabályzat**", "Szerver szabályzat lekérése.")
        .setAuthor("Készítette: 𝕊𝕫𝕒𝕓𝕚𝕚 ♛#3656")
        .addField("A parancsot használta:",`${message.author.toString()}`) 
        message.author.send(embed).then(async msg => {
          message.delete();
          return;})
          }
        });

//Szabályzat------------------------------------------------------------------------------
  client.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'szabályzat') {
      const embed = new discord.RichEmbed()
        .setThumbnail("https://i.pinimg.com/originals/12/50/89/125089ee636b8eaafa296cc62fe21a9f.gif")
        .setColor("#ffc94a")
        .addField("°", "A szabályok a **SzonikGames** szerverre érvényesek!")
        .addBlankField()
        .addField("°", "** Ne hirdess! (Discord szerver, TeamSpeak szerver, Egyéb szerverek, Youtube videó/live)**")
        .addField("°", "** Ne káromkodj!**")
        .addField("°", "** Ne szidj senkit sem!**")
        .addField("°", "** Ne provokálj másokat/kéregess!**")
        .addField("°", "** Ne floodolj/spamelj! (Max 2-szer írj ki valamit!)**")
        .addField("°", "** Maximum 5 emoji!**")
        .addField("°", "** Tilos a szoba jump! (Szobáról szobára lépkedni)**")
        .addField("°", "** Tilos 18+ tartalmú képeket feltölteni!**")
        .addField("°", "** Tilos Olyan zenét hallgatni, nyilvános csatornában, amely trágár szavakat, +18-as tartalmat von magába.**")
        .addField("°", "⛔ Némítórendszerünk:")
        .addField("°", "** Káromkodás/flood: 45 perc mute!**")
        .addField("°", "** Sértegetés/szidás: 2 óra mute! (Többszörös megszegés után 2 nap némítás!)**")
        .addField("°", "** Kéregetés (rang): 20 perc némítás!**")
        .addField("°", "** Fenyegetés: 30 perc némítás!**")
        .addField("°", "** Provokálás: 20 perc némítás!**")
        .addField("°", "⛔ Tiltórendszerünk:")
        .addField("°", "** Discord szerveren tartózkodó személyek szidása: Szerverről való tiltás!**")
        .addField("°", "** Hirdetés: Szerverről való tiltás!**")
        .addField("°", "** Zaklatás: Szerverről való tiltás!**")
        .addField("°", "** A szabályok betartása minden személyre vonatkozik! Amennyiben nem tartod be ezen szabályokat, akkor az következményeket von maga után! A szabályok módosításának lehetősége fent áll!**")
        .setImage('http://kepkezelo.com/images/y2lk40ww9pxkm9pl5ngl.png')
        .setAuthor("Készítette: 𝕊𝕫𝕒𝕓𝕚𝕚 ♛#3656")
        message.author.send(embed).then(async msg => {
          message.delete();
          return;})
          }
        });
//Szabályzat------------------------------------------------------------------
  

//Képek-----------------------------------------------------------------------

client.on("message", message => {
  if (message.content.toLowerCase() === prefix + 'rip') {
    const embed = new discord.RichEmbed()
      .setThumbnail("https://kerdezdmeg.hu/wp-content/uploads/2019/02/rip.png")
      .setColor("RANDOM")
      message.channel.send(embed).then(async msg => {
        message.delete();
        return;})
        }
      });
      
  client.on("message", message => {
        if (message.content.toLowerCase() === prefix + 'dance') {
          const embed = new discord.RichEmbed()
          .setImage("https://media.tenor.com/images/ea3fd4bf65e9ce7e093d6cc987e74970/tenor.gif")
          .setColor("#ffc94a")
            message.channel.send(embed).then(async msg => {
              message.delete();
              return;})
              }
            });

            client.on("message", message => {
              if (message.content.toLowerCase() === prefix + 'petyi') {
                const embed = new discord.RichEmbed()
                .setImage("https://i.pinimg.com/originals/09/7e/ae/097eae9be7d20159d2f834f252fad80a.gif")
                .setColor("#ffc94a")
                  message.channel.send(embed).then(async msg => {
                    message.delete();
                    return;})
                    }
                  });

  client.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'gg') {
      const embed = new discord.RichEmbed()
      .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPpKhIvEz0Fy6hm9twZGvvQteHQPficcibqhJ-06jZnCa6qrNg&usqp=CAU")
      .setColor("RANDOM")
        message.channel.send(embed).then(async msg => {
          message.delete();
          return;})
          }
        });

//Képek vége -----------------------------------------------------------------

  //Szerver stat------------------------------------------------------------

  


client.on("message", message => {
  if (message.content === prefix + "idő") {
    const timee = new discord.RichEmbed()
    .setTitle(moment().format('YYYY, MMMM, DD'))
    .addField("Itt a pontos idő: ", moment().format('LTS'))
    .addField("A parancsot használta:",`${message.author.toString()}`) 
    message.channel.send(timee).then(async msg => {
      await msg.react("🕙");
      message.delete();
      return;})
      }
    });

/*
   
setInterval(function(){ 
  client.channels.get("711198313801711616").setName(`🕙│Idő: ${moment().format('LT')}`)
}, 60*1000);

*/
client.on("message", message => {
  if (message.content.toLowerCase() === prefix + '----------------------------------------------------------------------') {
    const embed = new discord.RichEmbed()
     .setThumbnail("https://i.pinimg.com/originals/12/50/89/125089ee636b8eaafa296cc62fe21a9f.gif")
     .setTitle('Hétfő keddi játékok:') 
     .addField(":one:","**CS:GO**")
     .addField(":two:","**R6**")
     .addField(":three:","**Killing Floor 2**")
     .addField(":four:","**Brawhalla**")
     .addField(":five:","**Skribble.io**")
     .setColor("#ffc94a")
     message.channel.send(embed).then(async msg => {
      await msg.react("1️⃣");
      await msg.react("2️⃣");
      await msg.react("3️⃣");
      await msg.react("4️⃣");
      await msg.react("5️⃣");
      message.delete();
      return;})
      }
    });

    client.on("message", message => {
      if (message.content.toLowerCase() === prefix + '24hours') {
        const embed = new discord.RichEmbed()
        .setTitle('24 órás live játékai **(08.15-08.16)**')
         .setThumbnail("https://i.pinimg.com/originals/12/50/89/125089ee636b8eaafa296cc62fe21a9f.gif") 
         .addField("<a:walk:732311237815435294>","**CS:GO**")
         .addField("<a:walk:732311237815435294>","**GTA V Online**")
         .addField("<a:walk:732311237815435294>","**Cat mario**")
         .addField("<a:walk:732311237815435294>","**R6**")
         .setColor("#ffc94a")
message.channel.send(embed).then(async msg => {
      message.react('🦆')
      message.delete();
      return;})
      }
    });

/*
▶️ ⏸️

🔴 The Chat 🔵
*/
console.log("Töltés: 0%");
console.log("10%");
console.log("20%");
console.log("30%");
console.log("40%");
console.log("50%");
console.log("60%");
console.log("70%");
console.log("80%");
console.log("90%");
console.log("100%");
console.log("Mostmár készen áll a bot a használatra!");


client.on(`message`, async message => {
  if (message.content.toLowerCase().startsWith(`${prefix}createtext`)) {
    const args = message.content.slice(13);
    message.guild.createChannel(`${args}`).then(channel => {
      console.log(`(${message.author.tag}) Létre hozta ezt a szobát: [${args}]`)
        message.delete();
    })
  }
});

//Create Channel

//Create Channel

const szinek = require("./colours.json")
const emo = require("./emoji.json")

client.on(`message`, async message => {
  if (message.content.toLowerCase().startsWith(`${prefix}createvoice`)) {
    const args = message.content.slice(13);
    message.guild.createChannel(`${args}`, `voice`).then(channel => {
      console.log(`(${message.author.tag}) Létre hozta ezt a szobát: [${args}]`)
      message.delete();
    })
  }
});


let y = process.openStdin()
y.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
    client.channel.get("676429313158938638").send (x.join(" "));
});



//Szerverinfó------------------------------------------------------------------------------------------

client.on("message", message => {
  if (message.content.toLowerCase() === prefix + 'szerverinfo') {
const serverembed = new discord.RichEmbed()
.setTitle("Szerver információ")
.setColor("#ffc94a")
.setThumbnail("https://i.pinimg.com/originals/12/50/89/125089ee636b8eaafa296cc62fe21a9f.gif")
.addField("Szerver név:",`${message.guild.name} (${message.guild.nameAcronym})`, true)
.addField("Szerver tulajdonos:", message.guild.owner.user.tag, true)
.addField("Regio:", message.guild.region)
.addField("Létszám:", message.guild.memberCount)
.addField("A parancsot használta:",`${message.author.toString()}`) 
message.channel.send(serverembed).then(async msg => {
  message.delete();
  return;})
  }
});


//Szerverinfó vége --------------------------------------------------------------------------------------

//Botinfó------------------------------------------------------------------------------------------------

client.on("message", message => {
  if (message.content.toLowerCase() === prefix + 'botinfo') {
const botembed = new discord.RichEmbed()
.setTitle("Bot információ")
.setColor("#ffc94a")
.setThumbnail("https://i.pinimg.com/originals/12/50/89/125089ee636b8eaafa296cc62fe21a9f.gif")
.addField("Bot név:", client.user.username)
.addField("Bot létrehozásának a napja:", moment(client.user.createdAt).format('YYYY. MMMM. DD. LTS'))
.addField("Szerverek:", client.guilds.size)
.addField("A parancsot használta:",`${message.author.toString()}`) 
message.channel.send(botembed).then(async msg => {
  message.delete();
  return;})
  }
});

//Botinfó vége-------------------------------------------------------------------------------------------
/*
client.channel.get

message.guild.channels.find("id", "szobaid")
*/
/*
client.on("message", message => {
  let szoba = message.guild.channels.find("id", "710288346382860368")
  if (message.content.toLowerCase().startsWith(prefix + "helpme")) {
      szoba.send(` ${message.author.toString()}-nek/nak segítségre van szüksége!!! A parancs ekkor lett használva: ${moment().format('LLL')}`)
  }
});
*/
//Report-----------------------------------------------------------------------------------------------------



client.on("message", message => {
  if (message.content.toLowerCase() === prefix + 'unban') {
    const embed = new discord.RichEmbed()
     .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/1/14/Ban_sign.png")
     .setTitle('Unban meghívó') 
     .addField("<:dc:722061121229553744> Unban Discord szerver meghívó:","**https://discord.gg/etbthsp**")
     .setColor("#FF0000")
     message.author.send(embed).then(async msg => {
      await msg.react("🦆");
      message.delete();
      return;})
      }
    });

//meghívó

client.on("message", message => {
  if (message.content.toLowerCase() === prefix + 'meghívó') {
    const embed = new discord.RichEmbed()
     .setThumbnail("https://hungarycs.hu/wp-content/uploads/discord.png.webp")
     .setTitle('Discord mehgívó: ') 
     .addField("<:dc:722061121229553744> SzonikGames Discord szervere:","**https://discordapp.com/invite/3XuQByz**")
     .setColor("#889ff2")
     message.author.send(embed).then(async msg => {
      await msg.react("🦆");
      message.delete();
      return;})
      }
    });



    client.on("message", message => {
      if (message.content.toLowerCase() === prefix + 'stbt') {
        const embed = new discord.RichEmbed()
         .setThumbnail("https://skribbl.io/res/thumbnail.png")
         .setTitle('Legyen Skribbl.io ma este?') 
         .addField(":one: ","**Igen!**")
         .addField(":two: ","**Ne!**")
         .setColor("#889ff2")
         message.channel.send(embed).then(async msg => {
          await msg.react("1️⃣");
          await msg.react("2️⃣");
          message.delete();
          return;})
          }
        });
    
//meghívó
//https://skribbl.io/res/thumbnail.png
//Links


client.on("message", message => {
  if (message.content.toLowerCase() === prefix + 'links') {
    const embed = new discord.RichEmbed()
     .setThumbnail("https://streamingdiez.com/wp-content/uploads/2017/03/YouTube-Facebook-Twitch.png")
     .setTitle('SzonikGames: ') 
     .addField("<:twitch:721387425032700065> Twitch ","**https://www.twitch.tv/szonik_games**")
     .addField("<:fb:721387253204516894> Facebook ","**https://www.facebook.com/SzonikGames-111255530255105/**")
     .addField("<:yt:721387281981636668> Youtube ","**https://www.youtube.com/channel/UCis7Z93ofv4GO5ki2KeS8-Q/featured**")
     .setColor("#6a006a")
     message.author.send(embed).then(async msg => {
      await msg.react("🦆");
      message.delete();
      return;})
      }
    });

    client.on("message", message => {
      if (message.content.toLowerCase() === prefix + 'twitch') {
        const embed = new discord.RichEmbed()
         .setThumbnail("https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/343_Twitch_logo-128.png")
         .setTitle('SzonikGames: ') 
         .addField("<:twitch:721387425032700065> Twitch ","**https://www.twitch.tv/szonik_games**")
         .setColor("#a503fc")
         message.channel.send(embed).then(async msg => {
          message.delete();
          return;})
          }
        });

        client.on("message", message => {
          if (message.content.toLowerCase() === prefix + 'fb') {
            const embed = new discord.RichEmbed()
             .setThumbnail("https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-512.png")
             .setTitle('SzonikGames: ') 
             .addField("<:fb:721387253204516894> Facebook ","**https://www.facebook.com/SzonikGames-111255530255105/**")
             .setColor("#3766bd")
             message.channel.send(embed).then(async msg => {
              message.delete();
              return;})
              }
            });
           
            client.on("message", message => {
              if (message.content.toLowerCase() === prefix + 'yt') {
                const embed = new discord.RichEmbed()
                 .setThumbnail("https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-512.png")
                 .setTitle('SzonikGames: ') 
                 .addField("<:yt:721387281981636668> Youtube ","**https://www.youtube.com/channel/UCis7Z93ofv4GO5ki2KeS8-Q/featured**")
                 .setColor("#ab2e2e")
                 message.channel.send(embed).then(async msg => {
                  await msg.react("🦆");
                  message.delete();
                  return;})
                  }
                });
    


//Links

client.on("message", message => {
  if (message.content.toLowerCase() === prefix + 'admins') {
    const adminsembed = new discord.RichEmbed()
     .setThumbnail("https://i.pinimg.com/originals/12/50/89/125089ee636b8eaafa296cc62fe21a9f.gif")
     .setTitle('Admin csapat :') 
     .addField("⚜│Tulajdonos","**SzonikGames#6047**")
     .addField("🔴│Vezér Admin","**𝕊𝕫𝕒𝕓𝕚𝕚 ♛#3656**")
     .addField("⭕│Admin","**skori576#4363**")
     .addField("A parancsot használta:",`${message.author.toString()}`) 
     .setColor("#8e2430")
     message.author.send(adminsembed).then(async msg => {
      message.delete();
      return;})
      }
    });
//Event-------------------------------------------------------------------------------------------------------------------------------


    client.on("message", message => {
      if (message.content.toLowerCase() === prefix + 'valamikellideisxd') {
        const embed = new discord.RichEmbed()
        .setTitle('Játék szavazás:')
         .setThumbnail("https://i.pinimg.com/originals/12/50/89/125089ee636b8eaafa296cc62fe21a9f.gif") 
         .addField(":one:","**Syndicate**")
         .addField(":two:","**Far cry 3**")
         .addField(":three:","**Observer**")
         .addField(":four:","**amnesia the dark descent / amachie for pigs**")
         .addField(":five:","**Just cause 4**")
         .addField(":six:","**Sherlock holmes crimes & punisments**")
         .addField(":seven:","**Dead space 1/2**")
         .setColor("#33a1ee")
message.channel.send(embed).then(async msg => {
      message.delete();
      await msg.react("1️⃣");
      await msg.react("2️⃣");
      await msg.react("3️⃣");
      await msg.react("4️⃣");
      await msg.react("5️⃣");
      await msg.react("6️⃣");
      await msg.react("7️⃣");
      return;})
      }
    });
//Event vége---------------------------------------------------------------------------------------------------------------------------

client.on("message", message => {
  if (message.content.toLowerCase() === prefix + 'detroit') {
    const embed = new discord.RichEmbed()
    .setTitle('Holnap azaz 2020.07.14. -én vigyük ki a Detroitot? ')
     .setThumbnail("https://i.pinimg.com/originals/12/50/89/125089ee636b8eaafa296cc62fe21a9f.gif") 
     .addField(":one:","**Igen**")
     .addField(":two:","**Nem**")
     .addField(":three:","**Flórácska vagyok és azt mondom igen!!**")
     .setColor("#33a1ee")
message.channel.send(embed).then(async msg => {
  message.delete();
  await msg.react("1️⃣");
  await msg.react("2️⃣");
  await msg.react("3️⃣");
  return;})
  }
});

//https://media.giphy.com/media/xUOxf2xydOdi4wfxPq/giphy.gif
//https://i.pinimg.com/originals/cc/52/96/cc5296f667530d51321ba2f8e44ba901.gif
client.on("message", message => {
  if (message.content.toLowerCase() === prefix + 'goodnight') {
    const embed = new discord.RichEmbed()
    .setTitle('Jó éjszakát')
     .setThumbnail("https://media.giphy.com/media/xUOxf2xydOdi4wfxPq/giphy.gif") 
     .addField("**🌑**",`${message.author.toString()}`)
message.channel.send(embed).then(async msg => {
  message.delete();
  await msg.react("🌑");
  return;})
  }
});

client.on("message", message => {
  if (message.content.toLowerCase() === prefix + 'goodmorning') {
    const embed = new discord.RichEmbed()
    .setTitle('Jó reggelt')
     .setThumbnail("https://media.giphy.com/media/3ohze3Etu7mUfkHkI0/giphy.gif") 
     .addField("**🌞**",`${message.author.toString()}`)
message.channel.send(embed).then(async msg => {
  message.delete();
  await msg.react("🌞");
  return;})
  }
});

//Hangulatok  https://media1.tenor.com/images/026a0a29654426f6047e60ac61ab41fc/tenor.gif?itemid=15639314


client.on("message", message => {
  if (message.content.toLowerCase() === prefix + 'kacsák') {
    const embed = new discord.RichEmbed()
    .setTitle('Kacsás gif előhívások:')
     .setThumbnail("https://i.pinimg.com/originals/12/50/89/125089ee636b8eaafa296cc62fe21a9f.gif") 
     .addField("🦆","**%ok**")
     .addField("🦆","**%sad**")
     .addField("🦆","**%happy**")
     .addField("🦆","**%nem**")
     .setColor("#ffc94a")
message.channel.send(embed).then(async msg => {
  message.delete();
  await msg.react("🦆");
  return;})
  }
});


client.on("message", message => {
  if (message.content.toLowerCase() === prefix + 'sad') {
    const embed = new discord.RichEmbed()
    .addField("**🦆**",`${message.author.toString()}`)
    .setImage("https://cdn.clipart.email/b0c7db2e0d9d8a243140317be2fe25d5_sad-cry-sticker-by-bduck-for-ios-android-giphy_360-360.gif")
    .setColor("#ffc94a")
      message.channel.send(embed).then(async msg => {
        message.delete();
        return;})
        }
      });

      client.on("message", message => {
        if (message.content.toLowerCase() === prefix + 'ok') {
          const embed = new discord.RichEmbed()
          .addField("**🦆**",`${message.author.toString()}`)
          .setImage("https://media0.giphy.com/media/8c77OuiTllfmN9WJG8/giphy.gif")
          .setColor("#ffc94a")
            message.channel.send(embed).then(async msg => {
              message.delete();
              return;})
              }
            });

            client.on("message", message => {
              if (message.content.toLowerCase() === prefix + 'nem') {
                const embed = new discord.RichEmbed()
                .addField("**🦆**",`${message.author.toString()}`)
                .setImage("https://media3.giphy.com/media/tJN9I8he9046GEYQVN/giphy.gif")
                .setColor("#ffc94a")
                  message.channel.send(embed).then(async msg => {
                    message.delete();
                    return;})
                    }
                  });

                  client.on("message", message => {
                    if (message.content.toLowerCase() === prefix + 'happy') {
                      const embed = new discord.RichEmbed()
                      .addField("**🦆**",`${message.author.toString()}`)
                      .setImage("https://media2.giphy.com/media/3gJREpsmbDHhzXl7MB/source.gif")
                      .setColor("#ffc94a")
                        message.channel.send(embed).then(async msg => {
                          message.delete();
                          return;})
                          }
                        });


//bot idő
/*
let uptimesec = (client.uptime / 3600);
let uptimehours = Math.floor(uptimesec / 3600);
let uptimeDays = Math.floor(uptimesec / 86400); 

uptimesec %= 3600;

let uptimeMins = Math.floor(uptimesec / 60);
let uptimeSecTotal = Number.parseInt(uptimesec % 60);

const sec = `${uptimeSecTotal} másodperc` ;
const min = `${uptimeMins} perc` ;
const hour = `${uptimehours} óra` ;
const days = `${uptimeDays} nap` ;

client.on("message", message => {
  if (message.content.toLowerCase() === prefix + 'st') {
    const embed = new discord.RichEmbed()
    .setTitle('🕚 Futási Idő 🕚')
    .addField("**🦆**",`${uptimeDays?days:''} `)
    .addField("**🦆**", `${uptimehours?hour:''} `)
    .addField("**🦆**",`${uptimeMins?min:''} `)
    .addField("**🦆**",`${uptimeSecTotal?sec:''}`)
    .setColor("#ffc94a")
    message.channel.send(embed).catch(console.error).then(async msg => {
      message.delete();
      return;})
      }
    });
*/