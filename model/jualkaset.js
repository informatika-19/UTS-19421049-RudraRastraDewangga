const monggoose = require('mongoose')
const Schema = monggoose.Schema

const jualkaset = new Schema ({

    Namapembeli: {
        type: String
    },
    JenisKaset: {
        type: String
    },
    Hargakaset: {
        type: String
    },
    Bayar: {
        type: String
    }
})
module.exports = monggoose.model('jualkaset', jualkaset)