const { getAll } = require('./repository/getAll')
const { create } = require('./repository/create')
const { getOne } = require('./repository/getOne')
const { modificar } = require('./repository/update')
const { softDelete } = require('./repository/softDelete')
const { hardDelete } = require('./repository/hardDelete')


module.exports = {
    getAll, create, getOne, modificar, softDelete, hardDelete
}