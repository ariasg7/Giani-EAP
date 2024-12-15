const con = require("./db_connect");

async function createTable(){
    let sql = `CREATE TABLE user (
        UserID INT NOT NULL AUTO_INCREMENT,
        email VARCHAR(50) NOT NULL,
        password VARCHAR(50) NOT NULL,
        firstname VARCHAR(50) NOT NULL,
        lastname VARCHAR(50) NOT NULL,
        address VARCHAR(50),
        cardnumber VARCHAR(50),
        securitynum INT,
        expdate INT,
        billingaddress VARCHAR(50),
        PRIMARY KEY (UserID)
        )`;
    await con.query(sql);
}
    
//createTable();

const user = {
    UserID: "",
    email: "gianiarp2002@hotmail.com",
    password: "123",
    firstName: "Giani",
    lastName: "Arias"
}

async function userExists(user){
    let sql = `
        SELECT * FROM user
        WHERE email = "${user.email}"
    `
    return await con.query(sql);
}

//read (CRUD)
async function login(user){
        let cUser = await userExists(user)
        if(!cUser[0]) throw Error("Email does not exist")
        if(cUser[0].password != user.password) throw error("Password incorrect!!")

        return cUser[0];
}

//create (CRUD)
async function register(user){
    let cUser = await userExists(user)
    if(cUser.length > 0) throw Error ("Email already in use")

    let sql = `
        INSERT INTO user(firstName, lastName, email, password)
        VALUES("${user.firstName}", "${user.lastName}","${user.email}","${user.password}")
    `
    await con.query(sql)
    let newUser = await login(user)
    return newUser
}
//updated (CRUD)
async function updateEmail(user) {
    let cEmail = await getEmail(user)
    if(cEmail) throw Error("Email already in use!!")
  
    let sql = `
      UPDATE user SET email="${user.email}"
    `
    await con.query(sql)
    let updatedUser = await userExists(user)
    return updatedUser[0]
  }
  
  async function getEmail(user) {
    let sql = `
      SELECT email FROM user
      WHERE email="${user.email}"
    `
    let email = await con.query(sql)
    return email[0]
  }
  
  //D for Delete - delete user account
  async function deleteAccount(user) {
    let sql = `
      DELETE from user
      WHERE email="${user.email}"
    `
    await con.query(sql)
  }
  
  // CRUD functions will go here 
  //R for READ -- get all users
  async function getAllUsers() {
    let sql = `SELECT * FROM user;`
    return await con.query(sql)
  }
  
  module.exports ={ getAllUsers, login, register, updateEmail, deleteAccount }