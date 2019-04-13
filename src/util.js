const colors = {
    reset: "\x1b[0m",
    red: "\x1b[31m",
    green: "\x1b[32m"
}

const color = (string, color) => {
    return colors[`${color}`] + string + colors.reset;
}

module.exports = { color, Collection: require("./structures/Collection") };