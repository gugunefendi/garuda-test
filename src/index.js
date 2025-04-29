import express from 'express'
const app = express()
const port = 3000
import router from './page/routes/index.js'

const authenticated = (req, res, next) => {
    if (true) {
        next()
    }
}

const validated = (req, res, next) => {
    if (true) {
        next()
    }
}

app.use([authenticated, validated], router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})