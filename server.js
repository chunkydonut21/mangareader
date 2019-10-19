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

    server.get('/', (req, res) => app.render(req, res, '/', req.query))

    server.get('/latest', (req, res) => app.render(req, res, '/latest', { page: req.query.page }))

    server.get(`/popular`, (req, res) => app.render(req, res, '/popular', { page: req.query.page }))

    server.get('/list', (req, res) => app.render(req, res, '/list', req.query))

    server.get('/manga/:slug', (req, res) => app.render(req, res, '/details', { slug: req.params.slug }))

    server.get('/directory/:category', (req, res) =>
        app.render(req, res, '/category', { category: req.params.category, page: req.query.page })
    )

    server.get('/reader/:chapterId', (req, res) => app.render(req, res, '/reader', { chapterId: req.params.chapterId }))

    server.use('/api/manga', manga)

    server.get('*', (req, res) => handle(req, res))

    server.listen(port, () => console.log('Listening'))
})
