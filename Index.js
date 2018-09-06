//'use strict';

const Eris = require("eris");
const path = require('path');

require('dotenv-safe').config({
  path: path.join(process.cwd(), '.env'),
  allowEmptyValues: true
})

TTBT = new Eris.CommandClient(process.env['CLIENT_TOKEN'], {}, {
	defaultHelpCommand: false,	// KEEP THIS FALSE
	ignoreBots: true,			// KEEP THIS TRUE 
    ignoreSelf: true,			// KEEP THIS TRUE 
    description: process.env['CLIENT_DESCRIPTION'],
    owner: process.env['CLIENT_OWNER'],
    prefix: process.env['CLIENT_PREFIX'],
	game_name: process.env['CLIENT_GAME_NAME']
});

require(path.join(process.cwd(), 'commands', '!meta', 'loader'));
require(path.join(process.cwd(), 'commands', 'general', '!meta', 'loader'));
require(path.join(process.cwd(), 'commands', 'moderator', '!meta', 'loader'));
require(path.join(process.cwd(), 'commands', 'fun', '!meta', 'loader'));
require(path.join(process.cwd(), 'commands', 'utility', '!meta', 'loader'));

TTBT.on("ready", () => { console.log("Ready!") })

TTBT.connect();