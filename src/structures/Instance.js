
const Console = require("./Console");
const commandHandler = require("./commandHandler");

class Instance {

    /**
     * The instance class to run the console with.
     * @param {String} root the root directory.
     * @param {Discord.ShardingManager} manager the ShardingManager.
     */

    constructor(root, manager) {
        this.manager = manager;
        this.console = new Console(this);
        this.commands = new Map(); 
        this.aliases = new Map();
        this.commandHandler = new commandHandler(root, this);
    }

    /**
     * Start the instance of Split - Shard
     */

    async start() {
        await this.commandHandler.loadCommands();
        await this.console.start();
    }

    async destroy() {
        
    }

}

module.exports = Instance;