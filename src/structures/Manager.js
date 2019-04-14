



const path = require('path');
const fs = require('fs');
const  { ShardingManager } = require('discord.js');

class Manager {

    constructor(file, token) {

        if (!token) throw new Error('ERROPT : no token.')

        this.file = file;

        if (!file) throw new Error('File must be specified.');
        if (!path.isAbsolute(file)) this.file = path.resolve(process.cwd(), file);
        const stats = fs.statSync(this.file);
        if (!stats.isFile()) throw new Error('File path does not point to a file.');

        this.manager = new ShardingManager(this.file, {token: token});

    }

    runInstance () {

        return new Promise(async (resolve, reject) => {

            this.manager.spawn('auto')
            .catch(err =>  reject(err))
            .then(man => {resolve(man)});

        })
    }

    destroyInstance () {
        return new Promise(async (resolve, reject) => {

            this.manager.shards.forEach(s => {s.kill();})

            resolve(true);

        })
    }

}

module.exports = Manager;