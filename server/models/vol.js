const DB =  require("../core/DBcore")
const DBinstance = new DB()
const db = DBinstance.getDB()

db.exec('create table IF NOT EXISTS vol  (volId INTEGER PRIMARY KEY NOT NULL  ,codeDepart VARCHAR(50) NOT NULL,codeDestination VARCHAR(50) NULL, prix INT NOT NULL)')

db.exec("INSERT INTO Vol ( codeDepart, codeDestination, prix) VALUES ( 'CDG', 'JFK', 400);")