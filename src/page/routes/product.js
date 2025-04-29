import express from "express"
const productRouter =  express.Router()

productRouter
    .route('/')
    .get((req, res) => {
        res.json({
            message: 'GET all products'
        })
    })
    .post((req, res) => {
        res.json({
            message: 'POST product'
        })
    })

productRouter
    .route('/:id')
    .get((req, res) => {
        res.json({
            message: 'GET product with ID: ' + req.params.id
        })
    })
    .put((req, res) => {
        res.json({
            message: 'UPDATE product ID: ' + req.params.id
        })
    })
    .delete((req, res) => {
        res.json({
            message: 'DELETE product ID: ' + req.params.id
        })
    })

export default productRouter