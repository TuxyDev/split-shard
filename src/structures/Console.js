
const InputHandler = require("./InputHandler");
const fs           = require("fs");

class Console {

    constructor() {
        this.handler = new InputHandler();
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

            console.log(`found command : ${command} with args: ${args}`);

        });

    }

}

module.exports = Console;