const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "!";

var fortunes = [
    "Yes",
    "No",
    "NOU",
    "Maybe",
    "No you egg thats a horrible idea why did you even ask that in the first place eggling",
    "YES THATS THE BEST IDEA I HAVE HEARD IN MY LIFE",
    "The egg klan says yes so I say yes",
    "Congrats you've proven that you are in fact an egg with that question  (my answer is no eggling if you couldnt tell) https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/f/fb/Sled_Racing_Clapping_%281%29.gif/revision/latest?cb=20170415231449"
];  

var WOD = [
    "Todays word of the day is Eggtown!",
    "Todays word of the day is Eggs",
    "Todays word of the day is Essay!",
    "Todays word of the day is Homework!",
    "Todays word of the day is Whats up dude!",
    "Todays word of the day is Anime Police",
    "Todays word of the day is President",
    "Todays word of the day is Nefarious",
    "Todays word of the day is Egg Bot!",
    "Todays word of the day is Gab2005",
    "Todays word of the day is Anime",
    "Todays word of the day is Elmo",
    "Todays word of the day is B00t",
    "Hah no word of the day for you my friend :))))))))))))))))))))))))",
    "Todays word of the day is nou",
    "Todays word of the day is Lunax",
    "Todays word of the day is thekippinggamer",
    "Todays word of the day is PlumberMotor",
    "Todays word of the day is LoonAxe",
    "Todays word of the day is English",
    "Todays word of the day is Playermode",
    "Todays word of the day is Bart",
    "Todays word of the day is Bootleg Turtle",
    "Todays word of the day is SkyStone",
    "Todays word of the day is Pingkeplol69",
    "Todays word of the day is Eggmode",
    "Todays word of the day is PonkerPunker",
    "Todays word of the day is Lunax's Server v3284938",
    "Todays word of the day is Pengkip",
    "Todays word of the day is egg klan",
    "Todays word of the day is baby cakes",
    "Todays word of the day is Marie",
    "Todays word of the day is sleep",
    "Todays word of the day is active",
    "Todays word of the day is giant",
    "Todays word of the day is insomnia",
    "Todays word of the day is sleep",
    "Todays word of the day is eggling",
    "Todays word of the day is Grammar",
    "Todays word of the day is Big Time Rush",
    "Todays word of the day is Klub Pengu Rewrotten",
    "Todays word of the day is Money",
    "Todays word of the day is Club Penguin Rewritten",
    "Todays word of the day is Eggs > Muffins",
    "Todays word of the day is :madman:",
    "Todays word of the day is hecc u",
    "Todays word of the day is icarly shouldn't have been ended",
    "Todays word of the day is thank lunarx for some words :egg2:",
    "Todays word of the day is watch lunax's cprmvs",
    "Todays word of the day is i miss club penguin",
    "Todays word of the day is namaste",
    "Todays word of the day is Vert!",
    "Todays word of the day is FabledFish!"
];

var eggrating = [
    "1 tsk tsk been doing naughty naughty bad egg things I see",
    "2 tsk tsk been doing not so good egg things lately",
    "3 seems as though you've been slacking in the egg department recently ://///",
    "4 I mean you're still a egg but could be better",
    "5 You're the everyday egg.  Not big or small or bad but just an egg",
    "6 You're similar to the everyday egg but you still do better as an egg then them",
    "7 Wowzar you've been doing some eggy things",
    "8 Congrats you're excelling in egg culture",
    "9 Good job!  You are being a big egg and doing very very well in egg culture",
    "10 WOW! You're a big egg!  I see you're an egg of culture",
    "10459954389574845748, I didnt even know you could be that large of an egg.  You might be next in line for egg master in the egg klan."
];

var job = [
    "Egg janitor",
    "Egg officer",
    "Egg mayor",
    "Egg deputy",
    "Egg FBI",
    "Egg pizza maker",
    "Egg police officer",
    "Anime lover",
    "Egg president",
    "Egg lord",
    "Bad egg, wow I egg bot havent commented on any other of these jobs but wow.  You should probably stop being a bad egg and become a good egg :egg2:",
    "Good egg",
    "Egg vice president",
    "Egg accountant",
    "Egg judge",
    "Egg lawyer",
    "Egg",
    "Homeless egg"
];

var whodidit = [
    "thekippinggamer",
    "the egg police",
    "scott cawthon",
    "lunarx",
    "pingkeplol69",
    "Pengkips youtube channel",
    "Driver3NO",
    "I don't know go ask gab, he holds the answer to everything",
    "Egg klan",
    "The ugandan commandos",
    "Guyscience",
    "Playermode",
    "Eggmode",
    "Gab",
    "Bag2006 (gab's older brother)",
    "The egg lords of eggtown",
    "The ghost of eggmas past",
    "The locobat company",
    "the mo-gang (play on mojang you uncultured swine)",
    "steven",
    "a long overdue diss track",
    "bad eggs (CALL THE EGG POLICE AAAHHG)",
    "ERROR- NO ONE DID IT, EGGRONA",
    "No you did it you big eggrona why did you even ask :madman:",
    "I don't know go ask gab, he holds the answer to everything",
    "Skystone",
    "Lostindonuts",
    "Lost(Eggs)Cookehs",
    "Nichole",
    "Drewcakes",
    "Arcuness",
    "SHOCKDOGZ THE HUGE EGG",
    "Vert the egg",
    "The egg janitor",
    "The egg president",
    "Codey",
    "Lunax and Skystone",
    "Vert",
    "Shaz",
    "FabledFish",
    "Club Penguin Online",
    "Club Penguin Universe"
];

var aprilfools = [
    "Pengur When",
    "XDDDDDDD",
    "Vert is quite an egg",
    "Gab is my favorite",
    "Baby dont hurt me",
    "Pengur Now",
    "Lunax - Today at 9:54 PM BIG TIME RUSH OH OH OHHH OHHHHH MAKE It COUNT PLAY IT STRAIGHT DONT LOOK BACK DONT HESITATE WHEN U GO B I G T I M E WHAT U KNOW WHAT U FEEL NEVER QUIT AND MAKE IT REAL AND U ROLL BIG TIME OH OH OH HEY OH HEY OH LISTEN TO UR HEART NOWHEY OH HEY OH DONT U FEEL THE RUSH HEY OH HEY OH BETTER TAKE UR SHOT NOW OH OH OH OHH",
    "is your childhood ruinedx2",
    "s u c c  an Eggy",
    "you sunk my eggship",
    "somebody spoiled the egg carton",
    "we're now changing this server to shrektown, all who appose will be destroyed",
    "Has your life been ruined",
    "consume your calcium",
    "HeWWO",
    "01011000 01000100 01000100 01000100 01000100 01000100",
    "JOIN MY BASEBALL SERVER",
    "Stop dab and anime it 2018!!!!!!!!",
    "XDDDDDDDDD",
    "eggroni pizza",
    "ripperoni",
    "https://www.youtube.com/watch?v=2yPX07vho0w",
    "doornax",
    "eggs deeee",
    "Eggtown is shutting down on April 1st 2022.",
    "Maybe",
    "I think Inspector Gadget would say **y e s**",
    "I think Inspector Gadget would say **n o**",
    "https://www.youtube.com/watch?v=LZ3mHEmyycw",
    "you look like the guy from high school musical",
    "you sorta look like shrek",
    "you look like gab which means you're amazing which means yes",
    "hah no",
    "hah yes"
];

client.on("message", function(message) {
  if (message.author.equals(client.user)) return;

  if (!message.content.startsWith(PREFIX)) return;

  var args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0].toLocaleLowerCase()) {
    case "eggbotisanegg":
      message.channel.sendMessage("nou")
      break;
    case "8ball":
      if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)])
      else message.channel.sendMessage("Can't Read that");
      break;
    case "hahahaahhahahahaha1323":
      message.channel.sendMessage("Whats up dudes! @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone")
      break;
    case "doit":
        var doit = new Discord.RichEmbed()
            .setImage("https://media2.giphy.com/media/3o84sw9CmwYpAnRRni/giphy.gif")
      message.channel.sendEmbed(doit);
      break;
    case "whatsupdude!":
        var dude = new Discord.RichEmbed()
            .setImage("http://farm3.staticflickr.com/2841/11673697056_ee50d478db.jpg")
      message.channel.sendEmbed(dude);
      break;
    case "help":
        var embed = new Discord.RichEmbed()
            .setTitle("Commands")
            .setImage("https://content.invisioncic.com/r229491/monthly_2016_09/screenshot.gif.1db64042aa10be728f13af5027f72f88.gif", true)
            .addField("!8ball", "Role The Dice or Ball of Chance!", true)
            .addField("!whatsupdude!", "Say whats up dude to your favorite egg", true)
            .addField("!wordoftheday", "ask egg bot about the world of the day! Heres how you type it !wordoftheday text.  You must typed something after !wordoftheday.", true)
            .addField("!nou", "No u", true)
            .addField("!badegg", "Show off what happens to bad eggs", true)
            .addField("!lundab", "<o/", true)
            .addField("!dab", "<o/", true)
            .addField("!egg", "what the command says", true)
            .addField("!goodegg", "Display a good egg", true)
            .addField("!oh", "ok", true)
            .addField("!eggrating", "See what Egg bot rates your egg level!", true)
            .addField("!eggjobs", "see what job you have in eggtown! :madman:", true)
            .addField("!xd", "ecks dee", true)
            .addField("!marie", "A certain persons favorite thing", true)
            .addField("!whodidit", "Ever wonder who did something? Ask egg bot then!", true)
            .addField("!thonk", "idk anymore", true)
            .addField("!lookatthesetwocharacters", "look at those two characters", true)
            .addField("!history", "learn the history about eggbot", true)
            .addField("!helicopter", "do what disney did and learn the way of the star wars helicopter!", true)
            .addField("!gabstory", "hear a gab story", true)
            .addField("!ahyes", "of course", true)
            .addField("!eggman", ":eggman:", true)
            .addField("!eggrona", ":eggronaman:", true) 
            .addField("!info", "get some info on egg bot", true)
            .addField("!reversecard", "Use the reverse card!", true)
            .addField("!question", "Use the upgraded 8ball command.  (this was for april fools originally)", true)
            .setColor(0x00FFFF)
        message.channel.sendEmbed(embed);
        break;
    case "nou":
        var nou = new Discord.RichEmbed()
            .setImage("http://www.vasilealecsandrifocsani.ro/images/nou.png")
        message.channel.sendEmbed(nou);
        break;
    case "wordoftheday":
    if (args[1]) message.channel.sendMessage(WOD[Math.floor(Math.random() * WOD.length)])
    else message.channel.sendMessage("Please have some text typed after !wordoftheday. Ex. !wordoftheday nou");
    break;
    case "badegg":
        var badegg = new Discord.RichEmbed()
            .setImage("https://m.popkey.co/ab00d3/v0zRG.gif")
        message.channel.sendEmbed(badegg);
        break;
    case "lundab":
        var lundab = new Discord.RichEmbed()
            .setImage("https://cdn.discordapp.com/attachments/391980593115693056/411678723998482434/Lunax.jpg")
        message.channel.sendEmbed(lundab);
        break;
    case "dab":
        var dab = new Discord.RichEmbed() 
            .setImage("https://cdn.discordapp.com/attachments/411658657802092545/411991839453872132/enlarge.png")
            .addField("<o/", "<o/")
        message.channel.sendEmbed(dab);
        break;
    case "oh":
        message.channel.sendMessage("ok")
        break;
    case "goodegg":
        var gegg = new Discord.RichEmbed()
            .setImage("http://orig04.deviantart.net/535c/f/2011/095/4/1/backwards_walking_egg_by_genshihebi-d3da1ag.gif")
        message.channel.sendEmbed(gegg);
        break;
    case "egg":
        var egg = new Discord.RichEmbed()
            .setImage("http://www.freepngimg.com/thumb/egg/13-egg-png-image-thumb.png")
        message.channel.sendEmbed(egg);
        break;
    case "eggrating":
    if (args[1]) message.channel.sendMessage(eggrating[Math.floor(Math.random() * eggrating.length)])
    else message.channel.sendMessage("Please have some text typed after !eggrating. Ex. !eggrating im a big big egg");
    break;
    case "eggjobs":
    if (args[1]) message.channel.sendMessage(job[Math.floor(Math.random() * job.length)])
    else message.channel.sendMessage("Please have some text typed after !eggjob. Ex. !eggjob eggtown mayor please assign me a job!");
    break;
    case "xd":
        var xd = new Discord.RichEmbed()
            .setImage("https://cdn.discordapp.com/attachments/411659439993520129/416036716235980823/image.png")
            .addField("ecks deeeeeeeeeeeeeeeeeeeeeeee", "xddddddddddddddddddddddddddddddddddddddd")
            .setTitle("xd")
        message.channel.sendEmbed(xd);
        break;
    case "marie":
      message.channel.sendMessage("youtube.com/Pengkip.")
    break;
    case "whodidit":
    if (args[1]) message.channel.sendMessage(whodidit[Math.floor(Math.random() * whodidit.length)])
    else message.channel.sendMessage("Please have some text after !whodidit. Ex. !whodidit Who started the eggtown wars");
    break;
    case "thonk":
        var thonk = new Discord.RichEmbed()
            .setImage("https://cdn.discordapp.com/attachments/411658657802092545/416691515528839169/enlarge.png")
            .addField("oh", "ok")
        message.channel.sendEmbed(thonk);
        break;
    case "lookatthesetwocharacters":
        var look = new Discord.RichEmbed()
            .setImage("https://cdn.discordapp.com/attachments/411658657802092545/416759958210871298/image.jpg")
            .addField("Look", "at these 2 character they’are the interesting part of this command")
        message.channel.sendEmbed(look);
        break;
    case "history":
        var history = new Discord.RichEmbed()
            .setTitle("An eggtown story:")
            .setDescription("One day the mayor of eggtown was getting too worked up with all the eggs asking questions and needing help. So he found a random broken down robot on the street and fixed him up.  The Robot had no memory of who they were but they were loyal to eggtown. The end.")
            .setImage("https://cdn.discordapp.com/attachments/343102240766296064/424370830315618314/fdawkisjufhkhjsdbfvkjdes.jpg")
        message.channel.sendEmbed(history);
        break;
    case "gabstory":
        var gabstory1 = new Discord.RichEmbed()
            .setImage("https://i.gyazo.com/thumb/1200/6466c15f9fdc1116fd937551627eb5e5-png.jpg")
        message.channel.sendEmbed(gabstory1);
        break;
    case "helicopter":
        var helicopter = new Discord.RichEmbed()
            .setImage("https://cdn.discordapp.com/attachments/343102240766296064/424566056368209921/egg32.gif")
        message.channel.sendEmbed(helicopter);
        break;
    case "ahyes":
        message.channel.sendMessage("Of course")
        break;
    case "otherinfo":
         var otherinfo1 = new Discord.RichEmbed()
            .setDescription("We regret to inform you that eggtown will be shutting down April First.  Unfortunately the egg master Eggmode decided it would be a good idea to spill water on the server so its only a matter of time the server short circuits and dies.  Now remember this is MoSt DeFiniTeLy nOt an AprIl f00ls jokE orchestrated by the c00gs.  Thank you for your time.")
         message.channel.sendEmbed(otherinfo1);
         break;
    case "imageinfo":  
         var imageinfo = new Discord.RichEmbed()
            .setImage("https://cdn.discordapp.com/attachments/343102240766296064/424618150969999373/otherinfo.png")
         message.channel.sendEmbed(imageinfo);
         break;
    case "eggman":
         var eggman = new Discord.RichEmbed()
            .setImage("https://cdn.discordapp.com/attachments/343102240766296064/424939614239850517/eggman.png")
         message.channel.sendEmbed(eggman);
         break;
    case "eggrona": 
         var eggronaman = new Discord.RichEmbed()
            .setImage("https://cdn.discordapp.com/attachments/343102240766296064/424939632799514636/eggronaman.png")
         message.channel.sendEmbed(eggronaman);
         break;
    case "pingdingdong":
      message.channel.sendMessage(":pingman: @everyone")
      break;
    case "partner":
         var partner = new Discord.RichEmbed()
            .setDescription("Join our partner: Pengkips Discord!")
          message.channel.sendEmbed(partner);
          break;
    case "partner2":
          var partner2 = new Discord.RichEmbed()
             .setDescription("A server with custom emotes and bots, hang out with friends and listen to music in our variety of channels. Free art and meme sharing")
          message.channel.sendEmbed(partner2);
          break;
    case "partner3":
          var partner3 = new Discord.RichEmbed()
             .setDescription("Click Here to Join! https://discord.gg/SdhVgQn")
             .setImage("https://cdn.discordapp.com/attachments/330847736192827392/424997005861847040/image.jpg")
          message.channel.sendEmbed(partner3);
          break; 
    case "ever1":
      message.channel.sendMessage("@everyone")
      break;
    case "eggtownpartnership":
          var eggtowneggkip = new Discord.RichEmbed()
              .setTitle(":egg: **The Eggtown Discord** :egg:")
              .addField("- A community discord which is based around everyone being a giant egg", " ￼ ")
              .addField("- We have the Egg Bot which is for this server only", " ￼ ")
              .addField("- We have classic emotes such as :eggman: and :eggronaman:", " ￼ ")   
              .addField("- We have the UnbelivaBoat bot which provides a broken great economy", " ￼ ")
              .addField("- We have many eggy channels such as #joeys-shrek-home", " ￼ ") 
              .addField("- We have #mature for all your special needs", " ￼ ")
              .addField(":egg: *We hope to see you join soon!* :egg:", " ￼ ")
              .addField("**Join here:https://discord.gg/DVexW3n**", " ￼ ")
              .setImage("https://cdn.discordapp.com/attachments/343102240766296064/425001985738145812/eggtownlogo.png")                
          message.channel.sendEmbed(eggtowneggkip);
          break;
    case "info":
          var info = new Discord.RichEmbed()
              .setTitle(":egg: **Egg Bot** :egg:")
              .addField("- A bot made specifically for eggtown", " ￼ ")
              .addField("- A highly modified version of bart bot", " ￼ ")
              .addField("- IF you see egg bot in another server please inform @Playermode#8623", " ￼ ")   
              .addField("- Updated Regularly", " ￼ ")
              .addField("- Do !help for all the commands", " ￼ ") 
              .addField("- Made by @Playermode#8623", " ￼ ")
              .addField("Current Version: 1.5", " ￼ ")
              .addField("**Please do not ask to add egg bot to your server as they are only meant for this server.**", " ￼ ")
              .setImage("https://cdn.discordapp.com/attachments/386610342077267968/430045331321782295/okegger.png")                
          message.channel.sendEmbed(info);
          break;
    case "can":
      message.channel.sendMessage("u dont")
      break;
    case "question":
      if (args[1]) message.channel.sendMessage(aprilfools[Math.floor(Math.random() * aprilfools.length)])
      else message.channel.sendMessage("Please ask an actual question. eggs deeeeeeeeeeeee");
      break;
    case "explaination":
      message.channel.sendMessage("February. this year, I had an idea to create Eggtown with Eggbot because Playermodes Illegal Corner was shut down. It was originally planned to be exactly like the original corner, new roles and new text channels. However, after critical reception from Guyscience on how 29089453 roles isn't good we decided to change it to eggtown.  But then egg bot stabbed me :((((((")
      break;
    case "randomthing":
          var egg435 = new Discord.RichEmbed()
             .setDescription("Oh looks like an anamoly occured.  It turns out the time 11:69 doesn't exist,  who knew right?  So this means eggtown isn't closing.  So yeah the hub of eggs isn't going anywhere for a while you egg haters :madman:")
         message.channel.sendEmbed(egg435);
         break;
    case "reversecard":
          var card = new Discord.RichEmbed()
              .setImage("https://cdn.discordapp.com/attachments/386610342077267968/430044723705675797/Reverse-Card.png")
          message.channel.sendEmbed(card);
          break;
  }
});

client.on('ready', function() { 
    client.user.setGame("Eggtown !help");
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS BOT IS ONLY FOR EGGTOWN
client.login(process.env.BOT_TOKEN);
