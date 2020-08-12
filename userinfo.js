const Discord = require("discord.js");
const prefix = '%';
console.log("\nPREFIX:\n" + settings.prefix);
const bot = new Discord.Client({disableEveryone: true});

bot.on ("ready", async () => {
	console.log('\nReady!\n');
	
	// Generates an invite for the bot
	bot.generateInvite(["ADMINISTRATOR"]).then(link => {
		console.log("\nINVITE BOT:\n" + link);
	}).catch(err => {
		console.log(err.stack);
	});

	await bot.generateInvite(["ADMINISTRATOR"]);
});

bot.on("message", async message => {
	
	// Checks if the message author is not a bot and isn't sent in a DM channel
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;
	
	let messageArray = message.content.split(" ");
	let command = messageArray[0];
	let args = messageArray.slice(1);
	let com = command.toLowerCase();
	var sender = message.author;

if(com === `${prefix}userinfo`) {
	// Checks if a user is mentioned
	let ment = message.mentions.users.first();
		if(!ment) {
			message.channel.send('Please mention a user!')
		}
	// Creats an embed with information about the mentioned user
		let embed = new Discord.RichEmbed()
		.addField("Username", ment.tag)
		.addField("ID", ment.id)
		.addField("Status", ment.presence.status)
		.addField("Created", ment.createdAt)
		.setThumbnail(ment.avatarURL)
		message.channel.send(embed)
	// Displays a message in the console if the command was used
		return console.log(`> userinfo command used by ${message.author.username}`);
	}
})
