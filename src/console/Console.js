const Library = require("../../index");

class Console {

    constructor() {
        super();
    }

    /**
     * Start the console.
     * @param {Discord.ShardingManager} manager the sharding manager to start the library with.
     */

    start(manager) {
        
        return new Promise((resolve, reject) => {

            if (!typeof manager === "Object") {
                reject(new Error("manager is not an Object."));   
            }

            this.manager = manager;

            this.resolve(this);
        
        })
    }

}

module.exports = Console;