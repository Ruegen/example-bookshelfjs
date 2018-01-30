const knex = require('../init')
knex.schema.createTable('products', function(table) {
      table.increments('id').primary();
      table.string('name');
  })
  .then(()=> console.log('created product table'))
  .catch((err) => console.log(err))