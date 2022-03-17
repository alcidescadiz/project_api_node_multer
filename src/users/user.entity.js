const { Sequelize, DataTypes } = require('sequelize');
const  {cnx}  = require('../database/index')

const user = cnx.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    fullname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cedula: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN, 
        allowNull: false, 
        defaultValue: true
        
    }
}, {
    tableName: 'users',
    createdAt: true,
    updatedAt: true
    
});


module.exports = {
    user
}
