const express = require('express') 
const router = express.Router()  
const {getAll,create,getOne, modificar, softDelete , hardDelete} = require('./user_controler')
const { body } = require('express-validator')

const upload = require('../utils/multer-clientes')

module.exports.usersApi = (app) => {
    router
    .get('/', getAll)
    .post('/', 
        upload.single('imagen'),
        body('email')
            .exists().withMessage('Debe incluir un Correo valido')
            .isEmail().withMessage('Debe ser un Correo valido'), 
        body('fullname')
            .exists().withMessage('Debe incluir un Nombre Completo')
            .isString().withMessage('El campo nombre debe ser un texto')
            .isLength({min:5}).withMessage('El campo nombre debe ser minimo 5 caracteres'),
        body('cedula')
            .exists().withMessage('Debe incluir el número de cédula'),
        create)
    .get('/:id', getOne)
    .put('/:id',
        upload.single('imagen'),
        body('email')
            .exists().withMessage('Debe incluir un Correo valido')
            .isEmail().withMessage('Debe ser un Correo valido'), 
        body('fullname')
            .exists().withMessage('Debe incluir un Nombre Completo')
            .isString().withMessage('El campo nombre debe ser un texto')
            .isLength({min:5}).withMessage('El campo nombre debe ser minimo 5 caracteres'),
        body('cedula')
            .exists().withMessage('Debe incluir el número de cédula'),
        body('estado')
            .exists().withMessage('Debe incluir el estado'),
        modificar)
    .put('/softdelete/:id', softDelete)
    .delete('/:id', hardDelete)
     
    app.use('/api/user', router)
}