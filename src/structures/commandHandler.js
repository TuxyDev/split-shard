
const fs = require("fs");


class commandHandler {

    constructor(instance) {
        this.instance = instance;
    }

    loadCommands() {
        for (let file of fs.readdirSync(`${__dirname}/../commands/`)) {
            if (!file.endsWith(".js")) return;
            const commandName = file.split(".")[0];
            try {
                const props = require(`${__dirname}/../commands/${commandName}`);
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