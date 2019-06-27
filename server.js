const express = require('express')
const next = require('next')
const mongoose = require('mongoose')
const manga = require('./api/mangaRoutes')

mongoose
    .connect('mongodb://localhost:27017/mangabase', { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))

const port = parseInt(process.env.PORT) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()

    server.get('/latest', (req, res) => app.render(req, res, '/latest', req.query))

    server.get('/popular', (req, res) => app.render(req, res, '/popular', req.query))

    server.get('/list', (req, res) => app.render(req, res, '/list', req.query))

    server.get('/reader/:chapterId', (req, res) => app.render(req, res, '/reader', { chapterId: req.params.chapterId }))

    server.use('/api/manga', manga)

    server.get('*', (req, res) => handle(req, res))

    server.listen(port, () => console.log('Listening'))
})
