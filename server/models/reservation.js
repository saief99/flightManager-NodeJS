
(async ()=>{
    const DB =  require("../core/DBcore")
const DBinstance = new DB()
const db = DBinstance.getDB()


await db.exec('create table IF NOT EXISTS reservation  (reservationId INTEGER PRIMARY KEY AUTOINCREMENT,userId INT NOT NULL, volId INT NOT NULL, FOREIGN KEY (userId) REFERENCES user(userId), FOREIGN KEY (volId) REFERENCES vol(volId))' )

await db.exec("INSERT INTO Reservation (userId, volId) VALUES ( 1, 1);")

})()