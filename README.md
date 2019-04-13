<div align="center">
  <br />
  <p>
    <a href="https://discord.gg/XsBXVxF"><img src="https://i.imgur.com/6CeKNiI.png" height="180" alt="discord.js" /></a>
  </p>
  <br />
  <p>
    <a href="https://discord.gg/XsBXVxF"><img src="https://discordapp.com/api/guilds/566198007310188554/embed.png" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/split-shard"><img src="https://img.shields.io/npm/v/split-shard.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/split-shard"><img src="https://img.shields.io/npm/dt/split-shard.svg?maxAge=3600" alt="NPM downloads" /></a>
    <a href="https://www.patreon.com/discordjs"><img src="https://img.shields.io/badge/donate-patreon-F96854.svg" alt="Patreon" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/split-shard/"><img src="https://nodei.co/npm/split-shard.png?downloads=true&stars=true" alt="npm installnfo" /></a>
  </p>
</div>
  
# Shard Splitter
**Our Aim:**
Our aim, is to make sharding logs easier to understand. We do this by having a new Terminal for whatever shard you like, this then makes it easier to read logs and look up guilds from just one shard.

# Example
```js
const { ShardingManager } = require("discord.js");
const manager = new ShardingManager("./YOUR_BOT_FILE", {token: "YOU_DISCORD_BOT_TOKEN"});

manager.spawn("auto");

let Shard = require("split-shard");
let terminal = Shard.Terminal();

terminal.start(manager);
```

# Authors
Tuxy#1290

DieselGaming67#1689
