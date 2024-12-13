const con = require("./db_connect");

async function createTable(){
    let sql = ` CREATE TABLE specs (
                SpecsID INT NOT NULL AUTO_INCREMENT,
                hoodie_img MEDIUMBLOB NOT NULL,
                color VARCHAR(50) NOT NULL,
                MerchandiseID INT,
                PRIMARY KEY (SpecsID),
                FOREIGN KEY (MerchandiseID) REFERENCES merchandise(MerchandiseID)
                );`
    await con.query(sql);
}
createTable();