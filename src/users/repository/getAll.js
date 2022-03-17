const env = require('dotenv').config()
const {user}  = require('../user.entity')

const getAll = async (req, res) => {
    try {
        const result = await user.findAll()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({error: 'No hay nada que obtener'})
    }
}

module.exports = {
    getAll
}