
const Console = require("./Console");
const commandHandler = require("./commandHandler");
const Manager = require("./Manager");
const Util = require("../util");

class Instance {

    /**
     * The instance class to run the console with.
     * @param {Discord.ShardingManager} manager the ShardingManager.
     */

    constructor(file, options = {}) {

        if (!options) throw new Error("no options provided.");

        this.util = Util;
        this.options = options;
        this.manager = new Manager(file, options.token);
        this.console = new Console(this, Util);
        this.commands = new Util.Collection(); 
        this.aliases = new Util.Collection();
        this.commandHandler = new commandHandler(this);

        return new Promise((resolve, reject) => {
            resolve(this);
        })

    }

    /**
     * Start the instance of Split - Shard
     */

    async start() {

        await this.commandHandler.loadCommands();
        await this.console.start(this.manager);

        this.manager.runInstance();

        return new Promise((resolve, reject) => {
            resolve(this);
        });

    }

    async destroy() {
        
        await this.manager.destroyInstance();

        return new Promise((resolve, reject) => {
            resolve(this);
        });
    }

}

module.exports = Instance;