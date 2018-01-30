const knex = require('../db/init')
const bookshelf = require('bookshelf')(knex)

const Product = bookshelf.Model.extend({
    tableName: 'products'
})

module.exports = Product