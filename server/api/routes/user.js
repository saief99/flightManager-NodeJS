const DB = require("../../core/DBcore")

const app = require("express")()
//const ReservationLogic = require("../../core/Reservation")

const getUser = ()=>{}


function makeid(length) {
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 


app.get("/user", (req, res)=>{
    const DBinstance = new DB()
    const db = DBinstance.getDB()
    const name = makeid(5)
    var stmt = db.prepare("INSERT INTO user(name) VALUES(?)");
    stmt.run("demo", function (err) { 
        if (err) throw err;
        console.log(this);
        console.log(this.lastID);
        res.status(200)
        res.json(this.lastID)
      });
   

})

app.post("/user", (req, res)=>{


})


module.exports = app