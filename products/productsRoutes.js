const express = require('express')
const router = express.Router()
const Product = require('./productsModel')

router.get('/products', (req, res) => {

    Product.fetchAll()
    .then( products => {
        res.status(200).json(products)
    })
    .catch(err => {
        res.status(404).json(err)
    })
})

router.post('/products', (req, res) => {
    
    const newProduct = req.body

    new Product(newProduct)
    .save()
    .then(product => {
        res.status(200).json(product)
    })
    .catch(err => {
        res.status(404).json(err)
    })
})

router.get('/products/:id', (req, res) => {
   
    Product.where('id', req.params.id)
    .fetch()
    .then(product => {
            res.status(200).json(product)
        })  
        .catch(err => {
            res.status(404).json(err)
        }) 
})

router.delete('/products/:id', (req, res) => {
   
    Product.where('id', req.params.id)
    .destroy()
    .then(product => {
            res.status(200).json(product)
        })  
        .catch(err => {
            res.status(404).json(err)
        }) 
})

module.exports = router