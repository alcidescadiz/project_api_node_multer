var express = require('express')
var cors = require('cors')
require('dotenv').config()

var app= express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static('public'))

const {cnx} =  require("./database/index")

app.get('/', (req, res)=>{
    res.send('hola mundo')
})

const { usersApi } = require('./users/api_user')

usersApi(app)

const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Server up in ${PORT}`)
})

