const express = require('express')
const router = express.Router()
const axios = require('axios')
const Manga = require('../models/Manga')

//ALL MANGA
router.get('/:page', (req, res) => {
    Manga.paginate({}, { page: req.params.page }).then(list => {
        if (!list) return res.status(404).json({ err: 'Nothing found' })
        res.status(200).json(list)
    })
})

//SORT BY POPULAR MANGA
router.get('/popular/:page', (req, res) => {
    Manga.paginate({}, { page: req.params.page, sort: { h: -1 } }).then(list => {
        if (!list) return res.status(404).json({ err: 'Nothing found' })
        res.status(200).json(list)
    })
})

//SORT BY LATEST
router.get('/latest/:page', (req, res) => {
    Manga.paginate({}, { page: req.params.page, sort: { ld: -1 } })
        .then(list => {
            if (!list) return res.status(404).json({ err: 'Nothing found' })
            res.status(200).json(list)
        })
        .catch(err => res.status(400).json(err))
})

//SORT BY STATUS
router.get('/status/:status/:page', (req, res) => {
    Manga.paginate({ s: req.params.status }, { page: req.params.page })
        .then(list => {
            if (!list) return res.status(404).json({ err: 'Nothing found' })
            res.status(200).json(list)
        })
        .catch(err => res.status(400).json(err))
})

// SINGLE MANGA & CHAPTER LIST
router.get('/single/:manga', (req, res) => {
    axios.get(`https://www.mangaeden.com/api/manga/${req.params.manga}/`).then(item => {
        res.status(200).json(item.data)
    })
})

//CHAPTER PAGES LIST
router.get('/chapter/:chapterId', (req, res) => {
    axios.get(`https://www.mangaeden.com/api/manga/${req.params.chapterId}/`).then(item => {
        res.status(200).json(item)
    })
})

//SORT BY CATEGORY
router.get('/:cat/:page', (req, res) => {
    Manga.paginate({ c: { $in: [req.params.cat] } }, { page: req.params.page })
        .then(list => {
            if (!list) return res.status(404).json({ err: 'Nothing found' })
            res.status(200).json(list)
        })
        .catch(err => res.status(400).json(err))
})

module.exports = router
