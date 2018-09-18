//'use strict';

const Eris = require("eris");
const path = require('path');

require('dotenv-safe').config({
  path: path.join(process.cwd(), '.env'),
  allowEmptyValues: true
})

const processCount = parseInt(process.env['SHARDS_PROCESSES'], 10);
const processID = parseInt(process.env['SHARDS_NODE_INSTANCE'], 10) % processCount;
const processShards = parseInt(process.env['SHARDS_PER_PROCESS'] || 1, 10);
const firstShardID = processID * processShards;
const lastShardID = firstShardID + processShards - 1;
const maxShards = processShards * processCount;

TTBT = new Eris.CommandClient(process.env['CLIENT_TOKEN'], 
	{
		autoreconnect: true,
		maxShards: maxShards,
		firstShardID: firstShardID,
		lastShardID: lastShardID
	}, 
	{
		defaultHelpCommand: false,	// KEEP THIS FALSE
		ignoreBots: true,			// KEEP THIS TRUE 
		ignoreSelf: true,			// KEEP THIS TRUE,
		disableEveryone: true,
		description: process.env['CLIENT_DESCRIPTION'],
		owner: process.env['CLIENT_OWNER'],
		prefix: process.env['CLIENT_PREFIX']
	}
);

require(path.join(process.cwd(), 'commands', '!meta', 'loader'));
require(path.join(process.cwd(), 'commands', 'general', '!meta', 'loader'));
require(path.join(process.cwd(), 'commands', 'moderator', '!meta', 'loader'));
require(path.join(process.cwd(), 'commands', 'fun', '!meta', 'loader'));
require(path.join(process.cwd(), 'commands', 'utility', '!meta', 'loader'));

TTBT.on("ready", () => { console.log("Ready!") })

TTBT.connect();