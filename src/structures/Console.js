
const InputHandler = require("./InputHandler");
const fs           = require("fs");

const colors = {
    reset: "\x1b[0m",
    red: "\x1b[31m"
}

class Console {

    constructor(instance) {
        this.handler = new InputHandler();
        this.instance = instance;
        this.handler.handle();
    }

    /**
     * Start the console.
     * @param {Discord.ShardingManager} manager the sharding manager to start the library with.
     */

    async start(manager) {
        
        return this.handler.on("input", (input) => {

            const args = input.trim().split(/ +/g);
            const command = args.shift().toLowerCase();

            const cmd = this.instance.commands.get(command) || this.instance.aliases.get(command); if (!cmd) return;

            cmd.run(manager, this);

        });

    }

}

module.exports = Console;