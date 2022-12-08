const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

const userCtrl = new UserController();

router.get("/", async(req, res) => {
    const result =  await userCtrl.getUsers();

    await userCtrl.getUserWithRaw();
    
    res.send(result)
})

module.exports = router;