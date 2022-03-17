const env = require('dotenv').config()
const {user}  = require('../user.entity')

const getOne = async (req, res) => {

    try {
        const { id } = req.params; 
        const result = await user.findByPk(id)
        res.json(result)
    } catch (error) {
        res.status(400).json({error: 'No hay nada que obtener'})
    }
}

module.exports = {
    getOne
}