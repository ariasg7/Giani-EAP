const express = require("express")
const Inventory = require("../models/inventory.js")
const router = express.Router()

router
.get('/getInventory', async (req, res) => {
    try {
      const inventories = await Inventory.getAllInventory()
      res.send(inventories)
    } catch(err) {
      res.status(500).send({message: err.message})
    }
  })
  
  .post('/inventoryRead', async (req, res) => {//asynchronous function that will handle the incoming request (req) and send the response (res).
    try {
      let inventory = await Inventory.invRead(req.body)
      res.send(inventory)
    } catch(err) {
      res.status(400).send({message: err.message})
    }
  })
  
  .post('/inventoryCreate', async(req, res) => {
    try {
      let inventory = await Inventory.invCreate(req.body)
      res.send(inventory)
    } catch(err) {
      res.status(400).send({message: err.message})
    }
  })
  
  .put('/inventoryUpdate', async(req, res) => {
    try {
      let inventory = await Inventory.invUpdate(req.body)
      res.send(inventory)
    } catch(err) {
      res.status(400).send({message: err.message})
    }
  })
  
  .delete('/inventoryDelete', async(req, res) => {
    try {
      await Inventory.invDelete(req.body)
      res.send("Successfully deleted")
    } catch(err) {
      res.status(400).send({message: err.message})
    }
  })
  
  module.exports = router