exports.run = async (manager, cons, args) => {
    const msg = cons.instance.commands.map(command => {`epic ${command.name} : ${command.help.description}`}).join("\n");
    console.log(msg);
}

exports.help = { 
    description: "shows all commands and their description."
}