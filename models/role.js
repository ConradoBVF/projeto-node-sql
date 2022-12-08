const { Sequelize, DataTypes } =  require("sequelize");
const db = require("../db.js");

const Role = db.define("roles", 
  { 
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    }
  }
)

module.exports = Role;