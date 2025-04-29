import express from 'express'

const cb0 = (req, res) => {
    console.log('CB0')
    next()
}

const cb1 = (req, res) => {
    console.log('CB1')
    next()
}

const cb2 = (req, res) => {
    console.log('CB2')
    next()
}

app.get('/products2', [cb0, cb1, cb2], (req, res) => {
    res.json([
        'Route handler'
    ])
})