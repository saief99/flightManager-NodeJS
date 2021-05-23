const reservation = require("./reservation")
const user = require("./user")
const vol = require("./vol")

const app = require("express")()
const expressAPP= ()=>{
    app.use(vol)
    app.use(reservation)
    app.use(user)
   

    return app

}

module.exports = expressAPP