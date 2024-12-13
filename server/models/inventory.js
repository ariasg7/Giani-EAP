const con = require("./db_connect");

async function createTable(){
    let sql = ` CREATE TABLE inventory (
                InventoryID INT NOT NULL AUTO_INCREMENT,
                size VARCHAR(50) NOT NULL,
                stock INT NOT NULL,
                SpecsID INT,
                PRIMARY KEY (InventoryID),
                FOREIGN KEY (SpecsID) REFERENCES specs(SpecsID) 
                );`
    await con.query(sql);
}
createTable();

const inventory = {
    InventoryID: 1,
    size: 'M',
    stock: 5,
    SpecsID: 1
}

async function invExists(inventory){
    let sql = `SELECT * FROM inventory
               WHERE InventoryID = ${inventory.InventoryID}`


    return await con.query(sql);
}

//Read in CRUD
async function invRead(inventory){
    let cInventory = await invExists(inventory)
    if(!cInventory[0]) throw Error("Inventory does not exist")
    
    return cInventory[0];
}

//Create in CRUD
async function invCreate(inventory){
    let cInventory = await invExists(inventory)
    if(cInventory.length > 0) throw Error ("Inventory already in exists")

    let sql = `
        INSERT INTO inventory(stock, size, SpecsID)
        VALUES(${inventory.stock},"${inventory.size}",${inventory.SpecsID})
    `
    await con.query(sql)
    let newInventory = await invRead(inventory)
    return newInventory
}

//updated in CRUD
async function invUpdate(inventory) {
    let cInventory = await getInventory(inventory)
    if(!cInventory[0]) throw Error("Inventory does not exist!!")
  
    let sql = `
      UPDATE inventory SET stock = ${inventory.stock}
      WHERE InventoryID = ${inventory.InventoryID}
    `
    await con.query(sql)
    let updatedInventory = await invExists(inventory)
    return updatedInventory[0]
  }

  async function getInventory(inventory){
    let sql = `SELECT InventoryID FROM inventory
                WHERE InventoryID = ${inventory.InventoryID}
    `
    let ID = await con.query(sql)
    return ID
  }

  async function getStock(inventory){
    let sql = `SELECT stock FROM inventory
    WHERE InventoryID = ${inventory.InventoryID}
    `
    let stock = await con.query(sql)
    return stock
  }

  //deleted in CRUD
  async function invDelete(inventory){
    let sql = `
      DELETE from inventory
      WHERE InventoryID=${inventory.InventoryID}
    `
        await con.query(sql)
  }

  async function getAllInventory() {
    let sql = `SELECT * FROM inventory`
    return await con.query(sql)
  }

  module.exports ={getAllInventory, invRead, invCreate, invUpdate, invDelete}