const apiRoutes  = require("./api/routes")
const bodyParser = require("body-parser")
const app = require("express")()
const cors = require("cors")
const Database = require("./core/DBcore")

const db = new Database()


app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(apiRoutes())






app.listen(3000, (err)=>{
    if(err)
        return console.error(err)
    console.log("Server listening on port 3000")
})