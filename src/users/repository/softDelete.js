const env = require('dotenv').config()
const {user}  = require('../user.entity')

const softDelete = async (req, res) => {

    try {
        const { id } = req.params
        const result = await user.update({
            estado: false
        },{where: {id: id}})
        res.json(result)
  
        } catch (error) {
            res.status(400).json({error: 'No hay nada que obtener'})
        }
}

module.exports = {
    softDelete
}