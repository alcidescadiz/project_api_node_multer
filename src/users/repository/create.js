require('dotenv').config()
const {user}  = require('../user.entity')

const {  validationResult } = require('express-validator')

const create =  async (req, res) => {
    const {filename, size} = req.file
    if ( size > 1000000) {
        return res.status(400).json({ errors: "Peso de la imagen es mayor a 1mb" });
    } 

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        const {fullname, email, imagen, cedula} = req.body
  
        const result = await user.create({
            fullname, 
            email, 
            imagen: process.env.URL+ 'users/' +filename , 
            cedula
        })
        res.status(200).json(result)
         
    } catch (error) {
        res.status(400).json({error: 'No hay nada que obtener'})
    }
}

module.exports = {
    create
}