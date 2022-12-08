const User = require("../models/user");
const db = require("../db.js");

class UserController{
    async getUsers(){
        return await User.findAll({
            limit: 10
        });
    }

    async getUserWithRaw(){
        const [results, metadata] = await db.query("SELECT * FROM users TOP 10;");
        console.log(results);
        console.log(metadata);
    }
}

module.exports = UserController;