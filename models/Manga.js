const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const mangaSchema = new mongoose.Schema({
    a: {
        type: String,
        required: true
    },
    c: [
        {
            type: String,
            required: true
        }
    ],
    h: {
        type: Number
    },
    i: {
        type: String
    },
    im: {
        type: String
    },
    ld: {
        type: Number
    },
    s: {
        type: Number
    },
    t: {
        type: String,
        required: true
    }
})

mangaSchema.plugin(mongoosePaginate)

module.exports = Manga = mongoose.model('manga', mangaSchema, 'manga')
