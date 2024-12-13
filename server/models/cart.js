const con = require("./db_connect");

async function createTable(){
    let sql = `CREATE TABLE cart (
                CartID INT NOT NULL AUTO_INCREMENT,
                quantity INT NOT NULL,
                total DECIMAL(10,2) NOT NULL,
                UserID INT NOT NULL,
                MerchandiseID INT NOT NULL,
                PRIMARY KEY (CartID),
                FOREIGN KEY (UserID) REFERENCES user(UserID),
                FOREIGN KEY (MerchandiseID) REFERENCES merchandise(MerchandiseID)
                );`
    await con.query(sql);
}
createTable();