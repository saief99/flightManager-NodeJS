
const app = require("express")()
const DB = require("../../core/DBcore")

//const ReservationLogic = require("../../core/Reservation")
console.log("ok")



const getUser = ()=>{}


app.get("/vol:id", (req, res)=>{
    const DBinstance = new DB()
    const db = DBinstance.getDB()

    const resData =  db.all("select * from vol where volId  not in (select v.volId from reservation r join vol v on v.volId = r.volId and  r.userId ="+req.params.id+")"
    , (err, data)=>{
       if(err)
            return res.status(500).json({success:"ko"})
        res.status(200)
        res.json(data)
        
    })
   
  //console.log(req)
    
})

app.post("/vol", (req, res)=>{
    

})


module.exports = app