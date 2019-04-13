
const fs = require("fs");


class commandHandler {

    constructor(root, instance) {
        this.dir = root;
        this.instance = instance;
    }

    loadCommands() {
        for (let file of fs.readdirSync(`${this.dir}/src/commands/`)) {
            if (!file.endsWith(".js")) return;
            const commandName = file.split(".")[0];
            try {
                const props = require(`${this.dir}/src/commands/${commandName}`);
                props.name = commandName;
                
                this.instance.commands.set(commandName, props);
    
                if (props.conf && props.conf.aliases) {
                    props.conf.aliases.forEach(alias => {
                      this.instance.aliases.set(alias, commandName);
                    });
                }
            
              } catch (e) {
                console.error(`Unable to load command ${commandName}: ${e}`);
              }
        };
    }
}

module.exports = commandHandler;