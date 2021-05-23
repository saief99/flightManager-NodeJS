
const app = require("express")()
const DB = require("../../core/DBcore")

//const ReservationLogic = require("../../core/Reservation")

const getAll = (requete)=>{
    const DBinstance = new DB()
    const db = DBinstance.getDB()

    
    return new Promise((resolve, reject)=>{
        db.all(requete,  (err, data)=>{
         if(err)
              reject(err)
         resolve(data)
         })
    })
        
    
}

const get = (requete)=>{
    const DBinstance = new DB()
    const db = DBinstance.getDB()

    
    return new Promise((resolve, reject)=>{
        db.get(requete,  (err, data)=>{
         if(err)
              reject(err)
         resolve(data)
         })
    })
        
    
}


const getReservation = ()=>{}


app.get("/reservation/:id",async(req, res)=>{
    const DBinstance = new DB()
    const db = DBinstance.getDB()
    console.log(req.params.id)
    const reservationsUser = []
    

    const reservations = await getAll("select * from reservation where userId = "+req.params.id)

    for await (let reservation of reservations) {
        console.log(reservation.volId)
        const vol = await get("select * from vol where volId = "+reservation.volId) 
      
        reservationsUser.push(vol)
     }
    


     

     console.log(reservationsUser)
        res.status(200)
        res.json(reservationsUser)
        
    
})

app.post("/reservation", (req, res)=>{
    const {volId, userId} = req.body
    const DBinstance = new DB()
    const db = DBinstance.getDB()
    var stmt = db.prepare("INSERT INTO reservation(userId, volId) VALUES(?, ?)");
    stmt.run(userId, volId, function (err) { 
        if (err) throw err;
        console.log(this);
        console.log(this.lastID);
        res.status(200)
        res.json(this.lastID)
      });

})
//requete de annulation :
app.post("/annulation", (req, res)=>{
    const {volId, userId} = req.body
    const DBinstance = new DB()
    const db = DBinstance.getDB()
    var stmt = db.prepare("DELETE FROM reservation where(userId = ? and volId = ?)");
    stmt.run(userId, volId, function (err) { 
        if (err) throw err;
        console.log(this);
        console.log(this.lastID);
        res.status(200)
        res.json(this.lastID)
      });

})

module.exports = app

