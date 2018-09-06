//'use strict';

TTBT.registerCommand("info", (msg) => {
	return "```Markdown\n * "
			+ "BOT INFO *\n"
			+ "- Bot Creator: TTBB#8359\n"
			+ "- Bot Creator ID: 124640179313967104\n\n"
			+ "- Bot Owner: " + process.env['CLIENT_OWNER'] + "\n"
			+ "- Bot Owner ID: " + process.env['CLIENT_OWNERID'] + "\n\n"
			+ "- Bot Description: " + process.env['CLIENT_DESCRIPTION'] + "\n"
			+ "- Language: Javascript\n"
			+ "- Library: Eris by abalabahaha\n"
			+ "- Version: 1.0.0 \n\n"
			+ "- Guilds: " + TTBT.guilds.size + "\n"
			+ "- Channels: " + Object.keys(TTBT.channelGuildMap).length + "\n"
			+ "- Users: " + TTBT.users.size +"\n```";
},	{
		caseInsensitive: true,
		cooldown: 3000,
		cooldownMessage: "Slow down! This command has a **3 second cooldown!**",
		requirements: {
			"manageMessages": true
		}
	}
);