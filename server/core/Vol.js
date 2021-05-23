class Vol {

    constructor(sqliteInstance){
        this.db = sqliteInstance

    }
    
    showReservation(user){
        sqliteInstance.run("select * from vol where id = ")
    }


}


module.exports = Vol