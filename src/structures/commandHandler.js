
const fs = require("fs");

class commandHandler {

    constructor() {
        
    }

    loadCommands() {
        for (let file of fs.readdirSync(`../commands/`)) {
            if (!file.endsWith(".js")) return;
            const commandName = file.split(".")[0];
            try {
                console.log(`Loading Command: ${commandName}`);
                const props = require(`../commands/${commandName}`);
                client.commands.set(commandName, props);
    
                if (props.conf && props.conf.aliases) {
                    props.conf.aliases.forEach(alias => {
                      client.aliases.set(alias, commandName);
                    });
                }
            
              } catch (e) {
                console.error(`Unable to load command ${commandName}: ${e}`);
              }
        };
    }
}

module.exports = commandHandler;