import express from 'express'
import productRouter from './product.js'
const router = express.Router()

router.use('/products', productRouter)

router.use('/', (req, res) => {
    res.json({
        message: 'ROUTE not found'
    })
})

export default router