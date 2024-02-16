const logger = (req, res, next) =>{
    console.log("olá passei pelo logger")
    next()
}

export default logger 