<img href="https://discord.gg/XsBXVxF" src="https://img.shields.io/discord/566198007310188554.svg?style=for-the-badge"/>
<br>
# Shard Splitter
**Our Aim:**
Our aim, is to make sharding logs easier to understand. We do this by having a new Terminal for whatever shard you like, this then makes it easier to read logs and look up guilds from just one shard.

# Example
```js
const { ShardingManager } = require("discord.js");
const manager = new ShardingManager("./src/instance.js", {token: "YOU_DISCORD_BOT_TOKEN"});

manager.spawn("auto");

let Shard = require("split-shard");
let terminal = new Shard.Terminal();

terminal.start(manager);
```

# Authors
Tuxy#1290 *(Did all of it)*

DieselGaming67#1689 *(Literally only made the README)*
