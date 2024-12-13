const con = require("./db_connect");

async function createTable(){
    let sql = ` CREATE TABLE merchandise (
                MerchandiseID INT NOT NULL AUTO_INCREMENT,
                cost DECIMAL(10,2) NOT NULL,
                PRIMARY KEY (MerchandiseID)
                );`
    await con.query(sql);
}
createTable();