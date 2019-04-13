exports.run = (manager, cons, args) => {
    console.log(cons.instance.util.color("red", "red") + " " + cons.instance.util.color(`args: ${args.join(" ")}`, "green") );
}

exports.conf = {
    aliases: ["p"]
}

exports.help = { 
    description: "test command."
}