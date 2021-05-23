



(async ()=>{
    const DB =  require("../core/DBcore")
const DBinstance = new DB()
const db = DBinstance.getDB()

await db.exec('create table user (userId INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(50) NOT NULL)')

await db.exec("INSERT INTO user (name) VALUES ('toto');")
await db.exec("INSERT INTO user (name) VALUES ('tata');")

})()