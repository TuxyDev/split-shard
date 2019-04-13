
const Console = require("./Console");
const commandHandler = require("./commandHandler");
const Util = require("../util");

class Instance {

    /**
     * The instance class to run the console with.
     * @param {String} root the root directory.
     * @param {Discord.ShardingManager} manager the ShardingManager.
     */

    constructor(root, manager) {
        this.util = Util;
        this.manager = manager;
        this.console = new Console(this, Util);
        this.commands = new Util.Collection(); 
        this.aliases = new Util.Collection();
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

const init = (root, manager) => {
    return new Instance(root, manager);
}

module.exports = init;