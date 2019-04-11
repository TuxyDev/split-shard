
const EventEmmiter = require("events");

class InputHandler extends EventEmmiter {

    constructor() {
        super();
    }

    handle() {

        const stdin = process.openStdin();

        

        process.stdout.write(`split-shard > `)

        stdin.addListener('data', text => {

            const input = text.toString().trim()
            this.emit("input", input);

            stdin.pause();

        });

    }

}

module.exports = InputHandler;