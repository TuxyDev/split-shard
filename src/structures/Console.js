
const InputHandler = require("./InputHandler");

class Console {

    constructor(instance) {
        this.handler = new InputHandler();
        this.instance = instance;
    }

    /**
     * Start the console.
     * @param {Discord.ShardingManager} manager the sharding manager to start the library with.
     */

    async start(manager) {

        await console.clear();

        await console.log(`   
        ╭───────────────────────────────────────────────────────────────╮
        │                                                               │
        │                  Split-Shard Version 1.0.0                    │
        │               Developed by Tuxy & DieselGaming                │
        │             ${"\x1b[4m"}https://github.com/TuxyDev/split-shard${"\x1b[0m"}            │
        │                                                               │
        ╰───────────────────────────────────────────────────────────────╯`);

        this.handler.handle();
        
        return this.handler.on("input", (input) => {

            const args = input.slice(0).trim().split(/ +/g);
            const command = args.shift().toLowerCase();

            const cmd = this.instance.commands.get(command) || this.instance.aliases.get(command); if (!cmd) return;

            cmd.run(manager, this, args);

        });

    }

}

module.exports = Console;