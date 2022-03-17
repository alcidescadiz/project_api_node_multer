const env = require('dotenv').config()
const {user}  = require('../user.entity')

const hardDelete = async (req, res) => {
    try {
          const { id } = req.params
          const result = await user.destroy({where: {id: id}}) 
          if (result === 1) {
            res.json( {mensaje: `Usuario de Id: ${id} fue eliminado`})
          } else {
            res.json({mensaje: 'User no existe'})
          }
    } catch (error) {
            res.status(400).json({error: 'No hay nada que obtener'})
    }
}

module.exports = {
    hardDelete
}