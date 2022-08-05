function successfullMessage(msg) {
    return "✅ *Xofiy-X*:  ```" + msg + "```"
}

function errorMessage(msg) {
    return "🛑 *Xofiy-X*:  ```" + msg + "```"
}

function infoMessage(msg) {
    return "⏺️ *Xofiy-X*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
