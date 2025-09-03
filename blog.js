const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.listen(port, () =>{
    console.log(`State guardando il mio blog sulla porta ${port}`)
})


//Routes

app.get('/', (req, res) =>{
    res.send('<h1>Server del mio blog</h1>')
})