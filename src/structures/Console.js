
const InputHandler = require("./InputHandler");
const { version } = require('../../package.json');

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
        ${"\x1b[32m"}╭───────────────────────────────────────────────────────────────╮${"\x1b[0m"}
        ${"\x1b[32m"}│                                                               │${"\x1b[0m"}                                     
        ${"\x1b[32m"}│${"\x1b[0m"}                  Split-${"\x1b[35m"}Shard${"\x1b[0m"} Version: ${version}                   ${"\x1b[32m"}│${"\x1b[0m"}
        ${"\x1b[32m"}│${"\x1b[0m"}               Developed by ${"\x1b[34m"}Tuxy${"\x1b[0m"} & ${"\x1b[34m"}DieselGaming${"\x1b[0m"}                ${"\x1b[32m"}│${"\x1b[0m"}
        ${"\x1b[32m"}│${"\x1b[0m"}             ${"\x1b[4m"}https://github.com/TuxyDev/split-shard${"\x1b[0m"}            ${"\x1b[32m"}│${"\x1b[0m"}
        ${"\x1b[32m"}│                                                               │${"\x1b[0m"}
        ${"\x1b[32m"}╰───────────────────────────────────────────────────────────────╯${"\x1b[0m"}`);

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