const { Sequelize, DataTypes } =  require("sequelize");
const db = require("../db.js");

const UserRole = db.define("user_role", 
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
      references: {
        model: 'roles',
        key: 'id'
      }
    }
  }
)

module.exports = UserRole;