const env = require('dotenv').config()
const {user}  = require('../user.entity')

const {  validationResult } = require('express-validator')

const modificar = async (req, res) => {
    const {filename, size} = req.file
    if ( size > 1000000) {
        return res.status(400).json({ errors: "Peso de la imagen es mayor a 1mb" });
    } 

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { id } = req.params
        const {fullname, email, imagen, cedula, estado} = req.body
   

        const result = await user.update({
            fullname, 
            email, 
            imagen: process.env.URL+ 'users/' +filename , 
            cedula,
            estado
        },{where: {id: id}})
        res.json(result)
  
        } catch (error) {
            res.status(400).json({error: 'No hay nada que obtener'})
        }
}

module.exports = {
    modificar
}