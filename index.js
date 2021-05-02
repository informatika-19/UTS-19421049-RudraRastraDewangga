const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/uts-rudra', {
    useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true

}).then (() => {
    console.log('Berhasil connect database')

}).catch((e) => {
    console.log(e)
    console.log('gagal connect database')
})

app.use(bodyParser.json({
    extend: true,
    limit:'20mb'
}))

app.use(bodyParser.urlencoded({
    extend: true,
    limit:'20mb'
}))

app.get('/', (req, res)=>{
    res.send('<h1>Penjualan Kaset</h1>')

})

app.use('/lampu/', require('./routes/jualkaset'))

app.listen(7000, () => {
console.log('Server Started')

})