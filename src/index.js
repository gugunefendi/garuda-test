import express from 'express'
const app = express()
const port = 3000
import url from 'url'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

// simple respond
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// respond file
app.get('/product', (req, res) => {
    res.sendFile('./page/products.html', {root: __dirname})
})

// response json
app.get('/jsonresponse', (req, res) => {
    res.json({
        id: 1,
        name: 'Gunawan'
    })
})

// respond file
app.get('/home', (req, res) => {
    res.sendFile('./page/index.html', {root: __dirname})
})

// get request from url
app.get('/product/:id', (req, res) => {
    console.log(req.params)
    const id = req.params.id
    res.send('Product page with product id: ' + id)
})

// get request from url with query
app.get('/cart/:id', (req, res) => {
    console.log(req)
    const cartId = req.params.id
    const productName = req.query.product_name
    res.send('Cart page with cart id: ' + cartId + ' and product name: ' + productName)
})

// default page if any page not found
app.use('/', (req, res) => {
    res.status(404)
    // res.send("Page not found")
    res.sendFile('./page/404.html', {root: __dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})