const path = require("path")
const {ROOTSERVER} = require("../config")

const sqlite3 = require('sqlite3').verbose();

class DBcore {

    constructor(){
        this.db = new sqlite3.Database(path.join(ROOTSERVER,"DATABASE.db"), (err)=>{
            if(err)
                console.log(err)
        })
    }

    getDB(){
        return this.db
    }








}



module.exports = DBcore