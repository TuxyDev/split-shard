
const Console = require("./Console");
const commandHandler = require("./commandHandler");

class Instance {

    constructor(manager) {
        this.manager = manager;
        this.console = new Console();
        this.commandHandler = new commandHandler();
    }

    async start() {
        await this.commandHandler.loadCommands();
        await this.console.start();
    } 

}

module.exports = Instance;