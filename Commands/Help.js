//'use strict';

var helpCommand = TTBT.registerCommand("help", (msg) => {
	TTBT.getDMChannel(msg.author.id).then(channel => {
		  TTBT.createMessage(channel.id, "```Markdown\n"
				+ "**Prefix**\n"
				+ process.env['CLIENT_PREFIX'] + "\n\n"
				+ "**Commands**\n"
				+ " * General *\n"
				+ "<help - Brings up this message>\n"
				+ "<info - My information>\n"
				+ "<avatar - Brings up a user\'s avatar>\n"
				+ "<icon - Brings up the current server icon>\n"
				+ "<profile - Brings up a user\'s information>\n"
				+ "<server - Brings up the current server info>\n"
				+ "<channel - Brings up the current channel info>\n"
				+ "<ping - Tests my ping>\n\n"
				+ " * Moderation *\n"
				+ "<ban - Bans a user in the server>\n"
				+ "<hackban - Bans a user who is not in the current server>\n"
				+ "<unban - Unbans a user in the current server>\n"
				+ "<kick - Kicks a user in the current server>\n\n"
				+ " * Fun *\n"
				+ "<roll - Rolls a 6 sided die>\n"
				+ "<flip - Flips a coin>\n"
				+ "<drink - Gives you or a mentioned user a random drink>\n"
				+ "<8ball - Ask me a yes or no question>\n"
				+ "<who - Picks a random user in the server based on a given question>\n"
				+ "<clap - Adds :clap: between every word>\n"
				+ "<karaoke - Starts a karaoke session>\n"
				+ "<rps - Plays rock,paper,scissors with me>\n\n"
				+ "```");
				
			TTBT.createMessage(channel.id, "```Markdown\n"
				+ " * Utility *\n"
				+ "<choose - Chooses from a selection of options>\n"
				+ "<raffle - Starts a raffle in a server>\n"
				+ "<say - Makes me repeat what you say>\n"
				+ "<reverse - Reverses a given string>\n\n"
				+ "Type " + process.env['CLIENT_PREFIX'] + "<help command> for more information on a command\n"
				+ "Example: " + process.env['CLIENT_PREFIX'] + "help ping"
				+ "```");
	})
	
	if (msg.channel.guild) 
		return ":inbox_tray: | **" + msg.author.username + "**, DM sent!";
},	{
		caseInsensitive: true,
		cooldown: 3000,
		cooldownMessage: "Slow down! This command has a **3 second cooldown!**",
		requirements: {
			"manageMessages": true
		}
	}
);

helpCommand.registerSubcommand("info", (msg) => {
	return "```Markdown\n"
			+ "**Info**\n\n"
			+ " * Description *\n"
			+ "Checks my information.\n"
			+ " * Arguments *\n"
			+ "<none>\n"
			+ " * Examples *\n"
			+ process.env['CLIENT_PREFIX'] + "info\n"
			+ "```";
},	{
		caseInsensitive: true,
		cooldown: 3000,
		cooldownMessage: "Slow down! This command has a **3 second cooldown!**",
		requirements: {
			"manageMessages": true
		}
	}
);

helpCommand.registerSubcommand("avatar", (msg) => {
	return "```Markdown\n"
			+ "**Avatar**\n\n"
			+ " * Description *\n"
			+ "Brings up a user\'s avatar.\n"
			+ " * Arguments *\n"
			+ "<mentioned user> OR <user id> OR <username> OR <none>.\n"
			+ " * Examples *\n"
			+ process.env['CLIENT_PREFIX'] + "avatar @TTBT OR " + process.env['CLIENT_PREFIX'] + "avatar 408250314282500096 OR " + process.env['CLIENT_PREFIX'] + "avatar TTBT OR " + process.env['CLIENT_PREFIX'] + "avatar\n"
			+ "```";
},	{
		caseInsensitive: true,
		cooldown: 3000,
		cooldownMessage: "Slow down! This command has a **3 second cooldown!**",
		requirements: {
			"manageMessages": true
		}
	}
);

helpCommand.registerSubcommand("icon", (msg) => {
	return "```Markdown\n"
			+ "**Icon**\n\n"
			+ " * Description *\n"
			+ "Brings up the current server icon\n"
			+ " * Arguments *\n"
			+ "<none>\n"
			+ " * Examples *\n"
			+ process.env['CLIENT_PREFIX'] + "icon\n"
			+ "```";
},	{
		caseInsensitive: true,
		cooldown: 3000,
		cooldownMessage: "Slow down! This command has a **3 second cooldown!**",
		requirements: {
			"manageMessages": true
		}
	}
);

helpCommand.registerSubcommand("profile", (msg) => {
	return "```Markdown\n"
			+ "**Profile**\n\n"
			+ " * Description *\n"
			+ "Brings up a user\'s information.\n"
			+ " * Arguments *\n"
			+ "<mentioned user> OR <user id> OR <username> OR <none>.\n"
			+ " * Examples *\n"
			+ process.env['CLIENT_PREFIX'] + "profile @TTBT OR " + process.env['CLIENT_PREFIX'] + "profile 408250314282500096 OR " + process.env['CLIENT_PREFIX'] + "profile TTBT OR " + process.env['CLIENT_PREFIX'] + "profile\n"
			+ "```";
},	{
		caseInsensitive: true,
		cooldown: 3000,
		cooldownMessage: "Slow down! This command has a **3 second cooldown!**",
		requirements: {
			"manageMessages": true
		}
	}
);

helpCommand.registerSubcommand("server", (msg) => {
	return "```Markdown\n"
			+ "**Server**\n\n"
			+ " * Description *\n"
			+ "Brings up information on the current server\n"
			+ " * Arguments *\n"
			+ "<none>\n"
			+ " * Examples *\n"
			+ process.env['CLIENT_PREFIX'] + "server\n"
			+ "```";
},	{
		caseInsensitive: true,
		cooldown: 3000,
		cooldownMessage: "Slow down! This command has a **3 second cooldown!**",
		requirements: {
			"manageMessages": true
		}
	}
);

helpCommand.registerSubcommand("channel", (msg) => {
	return "```Markdown\n"
			+ "**Channel**\n\n"
			+ " * Description *\n"
			+ "Brings up information on the current channel\n"
			+ " * Arguments *\n"
			+ "<none>\n"
			+ " * Examples *\n"
			+ process.env['CLIENT_PREFIX'] + "channel\n"
			+ "```";
},	{
		caseInsensitive: true,
		cooldown: 3000,
		cooldownMessage: "Slow down! This command has a **3 second cooldown!**",
		requirements: {
			"manageMessages": true
		}
	}
);

helpCommand.registerSubcommand("ban", (msg) => {
	return "```Markdown\n"
			+ "**Ban**\n\n"
			+ " * Description *\n"
			+ "Bans a user in the server. Use the word 'for' to provide a reason (optional).\n"
			+ " * Arguments *\n"
			+ "[<mentioned user> OR <user id> OR <username>] AND <reason>\n"
			+ " * Examples (without reason) *\n"
			+ process.env['CLIENT_PREFIX'] + "ban @TTBT OR " + process.env['CLIENT_PREFIX'] + "ban 408250314282500096 OR " + process.env['CLIENT_PREFIX'] + "ban TTBT\n"
			+ " * Examples (with reason) *\n"
			+ process.env['CLIENT_PREFIX'] + "ban @TTBT for being bad OR " + process.env['CLIENT_PREFIX'] + "ban 408250314282500096 for being bad OR " + process.env['CLIENT_PREFIX'] + "ban TTBT for being bad\n"
			+ "```";
},	{
		caseInsensitive: true,
		cooldown: 3000,
		cooldownMessage: "Slow down! This command has a **3 second cooldown!**",
		requirements: {
			"manageMessages": true
		}
	}
);
	
helpCommand.registerSubcommand("hackban", (msg) => {
	return "```Markdown\n"
			+ "**Hackban**\n\n"
			+ " * Description *\n"
			+ "Bans a user who is not in the server. Use the word 'for' to provide a reason (optional).\n"
			+ " * Arguments *\n"
			+ "<user id>\n"
			+ " * Example (without reason) *\n"
			+ process.env['CLIENT_PREFIX'] + "ban 408250314282500096\n"
			+ " * Example (with reason) *\n"
			+ process.env['CLIENT_PREFIX'] + "ban 408250314282500096 for being bad\n"
			+ "```";
},	{
		caseInsensitive: true,
		cooldown: 3000,
		cooldownMessage: "Slow down! This command has a **3 second cooldown!**",
		requirements: {
			"manageMessages": true
		}
	}
);

helpCommand.registerSubcommand("unban", (msg) => {
	return "```Markdown\n"
			+ "**Unban**\n\n"
			+ " * Description *\n"
			+ "Unbans a user who is not in the server. Use the word 'for' to provide a reason (optional).\n"
			+ " * Arguments *\n"
			+ "<user id>\n"
			+ " * Example (without reason) *\n"
			+ process.env['CLIENT_PREFIX'] + "ban 408250314282500096\n"
			+ " * Example (with reason) *\n"
			+ process.env['CLIENT_PREFIX'] + "ban 408250314282500096 for being bad\n"
			+ "```";
},	{
		caseInsensitive: true,
		cooldown: 3000,
		cooldownMessage: "Slow down! This command has a **3 second cooldown!**",
		requirements: {
			"manageMessages": true
		}
	}
);

helpCommand.registerSubcommand("ping", (msg) => {
	return "```Markdown\n"
			+ "**Ping**\n\n"
			+ " * Description *\n"
			+ "Tests my ping\n"
			+ " * Arguments *\n"
			+ "<none>\n"
			+ " * Examples *\n"
			+ process.env['CLIENT_PREFIX'] + "ping\n"
			+ "```";
},	{
		cooldown: 3000,
		caseInsensitive: true,
		cooldownMessage: "Slow down buddy! This command has a **3 second cooldown!**",
		requirements: {
			"manageMessages": true
		}
	}
);

helpCommand.registerSubcommand("roll", (msg) => {
	return "```Markdown\n"
			+ "**Roll**\n\n"
			+ " * Description *\n"
			+ "Rolls a 6 sided die.\n"
			+ " * Arguments *\n"
			+ "<none>\n"
			+ " * Examples *\n"
			+ process.env['CLIENT_PREFIX'] + "roll\n"
			+ "```";
},	{
		caseInsensitive: true,
		cooldown: 3000,
		cooldownMessage: "Slow down! This command has a **3 second cooldown!**",
		requirements: {
			"manageMessages": true
		}
	}
);

helpCommand.registerSubcommand("flip", (msg) => {
	return "```Markdown\n"
			+ "**Flip**\n\n"
			+ " * Description *\n"
			+ "Flips a coin\n"
			+ " * Arguments *\n"
			+ "<none>\n"
			+ " * Examples *\n"
			+ process.env['CLIENT_PREFIX'] + "flip\n"
			+ "```";
},	{
		caseInsensitive: true,
		cooldown: 3000,
		cooldownMessage: "Slow down! This command has a **3 second cooldown!**",
		requirements: {
			"manageMessages": true
		}
	}
);

helpCommand.registerSubcommand("drink", (msg) => {
	return "```Markdown\n"
			+ "**Drink**\n\n"
			+ " * Description *\n"
			+ "Gives you or a mentioned user a random drink.\n"
			+ " * Arguments *\n"
			+ "<mentioned user> OR <none>\n"
			+ " * Examples *\n"
			+ process.env['CLIENT_PREFIX'] + "drink @TTBT OR " + process.env['CLIENT_PREFIX'] + "drink\n"
			+ "```";
},	{
		caseInsensitive: true,
		cooldown: 3000,
		cooldownMessage: "Slow down! This command has a **3 second cooldown!**",
		requirements: {
			"manageMessages": true
		}
	}
);

helpCommand.registerSubcommand("8ball", (msg) => {
	return "```Markdown\n"
			+ "**8ball**\n\n"
			+ " * Description *\n"
			+ "Ask me a yes or no question and receive a random answer.\n"
			+ " * Arguments *\n"
			+ "<question>\n"
			+ " * Examples *\n"
			+ process.env['CLIENT_PREFIX'] + "8ball is TTBB the greatest of all time\n"
			+ "```";
},	{
		caseInsensitive: true,
		cooldown: 3000,
		cooldownMessage: "Slow down! This command has a **3 second cooldown!**",
		requirements: {
			"manageMessages": true
		}
	}
);

helpCommand.registerSubcommand("who", (msg) => {
	return "```Markdown\n"
			+ "**Who**\n\n"
			+ " * Description *\n"
			+ "Ask a \"who\" question and I will answer by naming a random user in this server\n"
			+ " * Arguments *\n"
			+ "<question>\n"
			+ " * Examples *\n"
			+ process.env['CLIENT_PREFIX'] + "who is the greatest of all time\n"
			+ "```";
},	{
		caseInsensitive: true,
		cooldown: 3000,
		cooldownMessage: "Slow down! This command has a **3 second cooldown!**",
		requirements: {
			"manageMessages": true
		}
	}
);

helpCommand.registerSubcommand("clap", (msg) => {
	return "```Markdown\n"
			+ "**Clap**\n\n"
			+ " * Description *\n"
			+ "Adds :clap: between every word in a given string.\n"
			+ " * Arguments *\n"
			+ "<string>\n"
			+ " * Examples *\n"
			+ process.env['CLIENT_PREFIX'] + "clap how are you OR " + process.env['CLIENT_PREFIX'] + "clap\n"
			+ "```";
},	{
		caseInsensitive: true,
		cooldown: 3000,
		cooldownMessage: "Slow down! This command has a **3 second cooldown!**",
		requirements: {
			"manageMessages": true
		}
	}
);

helpCommand.registerSubcommand("karaoke", (msg) => {
	return "```Markdown\n"
			+ "**Karaoke**\n\n"
			+ " * Description *\n"
			+ "Begins a karaoke session in the current channel\n"
			+ " * Sub Commands *\n"
			+ "Type '🎤' to join.\n"
			+ "Type 'queue' to peek at the current queue.\n"
			+ "Type 'start' to allow the next person in queue to sing.\n"
			+ "Type 'skip' to skip the next person in queue.\n"
			+ "Type 'end' to end the current session.\n"
			+ " * Arguments *\n"
			+ "<none>\n"
			+ " * Examples *\n"
			+ process.env['CLIENT_PREFIX'] + "karaoke\n"
			+ "```";
},	{
		caseInsensitive: true,
		cooldown: 3000,
		cooldownMessage: "Slow down! This command has a **3 second cooldown!**",
		requirements: {
			"manageMessages": true
		}
	}
);

helpCommand.registerSubcommand("rps", (msg) => {
	return "```Markdown\n"
			+ "**RPS**\n\n"
			+ " * Description *\n"
			+ "Plays rock,paper,scissors with me! All of my choices are completely random.\n"
			+ " * Arguments *\n"
			+ "<r> OR <p> OR <s>\n"
			+ " * Examples *\n"
			+ process.env['CLIENT_PREFIX'] + "rps r OR " + process.env['CLIENT_PREFIX'] + "rps p OR " + process.env['CLIENT_PREFIX'] + "rps s\n"
			+ "```";
},	{
		caseInsensitive: true,
		cooldown: 3000,
		cooldownMessage: "Slow down! This command has a **3 second cooldown!**",
		requirements: {
			"manageMessages": true
		}
	}
);
	
helpCommand.registerSubcommand("choose", (msg) => {
	return "```Markdown\n"
			+ "**Choose**\n\n"
			+ " * Description *\n"
			+ "Chooses a random option from a selection of given choices\n"
			+ " * Arguments *\n"
			+ "<choices>\n"
			+ " * Examples *\n"
			+ process.env['CLIENT_PREFIX'] + "choose this | that | here | there\n"
			+ "```";
},	{
		caseInsensitive: true,
		cooldown: 3000,
		cooldownMessage: "Slow down! This command has a **3 second cooldown!**",
		requirements: {
			"manageMessages": true
		}
	}
);

helpCommand.registerSubcommand("raffle", (msg) => {
	return "```Markdown\n"
			+ "**Raffle**\n\n"
			+ " * Description *\n"
			+ "Starts a raffle in a server\n"
			+ " * Sub Commands *\n"
			+ "Type 'raffle' to join.\n"
			+ "Type '" + process.env['CLIENT_PREFIX'] + "r [USER HERE]' to enter someone else into the raffle (mod-only)\n"
			+ " * Arguments *\n"
			+ "<none>\n"
			+ " * Examples *\n"
			+ process.env['CLIENT_PREFIX'] + "raffle\n"
			+ "```";
},	{
		caseInsensitive: true,
		cooldown: 3000,
		cooldownMessage: "Slow down! This command has a **3 second cooldown!**",
		requirements: {
			"manageMessages": true
		}
	}
);

helpCommand.registerSubcommand("say", (msg) => {
	return "```Markdown\n"
			+ "**Say**\n\n"
			+ " * Description *\n"
			+ "Makes me repeat what you say\n"
			+ " * Arguments *\n"
			+ "<string>\n"
			+ " * Examples *\n"
			+ process.env['CLIENT_PREFIX'] + "say Hello World\n"
			+ "```";
},	{
		caseInsensitive: true,
		cooldown: 3000,
		cooldownMessage: "Slow down! This command has a **3 second cooldown!**",
		requirements: {
			"manageMessages": true
		}
	}
);

helpCommand.registerSubcommand("reverse", (msg) => {
	return "```Markdown\n"
			+ "**Reverse**\n\n"
			+ " * Description *\n"
			+ "Reverses a given string\n"
			+ " * Arguments *\n"
			+ "<string>\n"
			+ " * Examples *\n"
			+ process.env['CLIENT_PREFIX'] + "reverse Hello World\n"
			+ "```";
},	{
		caseInsensitive: true,
		cooldown: 3000,
		cooldownMessage: "Slow down! This command has a **3 second cooldown!**",
		requirements: {
			"manageMessages": true
		}
	}
);