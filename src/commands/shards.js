exports.run = (manager, cons, args) => {
    if (!args[0]) {return console.log("args: --list, --kill <id>, --find <id>")}

    switch (args[0]) {
        case "--list" :
            console.log("you've been gnomed");
        break;
    }

}

exports.conf = {
    aliases: ["p"]
}

exports.help = { 
    description: "test command."
}