const { Sequelize } = require('sequelize')
require('dotenv').config()


database=process.env.DATABASE
username=process.env.USER_NAME
password=process.env.PASSWORD
host=process.env.HOST
dialect=process.env.DIALECT

const cnx = new Sequelize(database, username, password, {
    host: host,
    port: 3306,
    dialect: 'mysql'
});

cnx.sync().then(function(){
    console.log("BD sincronizada");
})

module.exports = {cnx}