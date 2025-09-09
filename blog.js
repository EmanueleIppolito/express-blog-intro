const express = require('express')
const app = express()
const port = 3000
const postsRouter = require('./routes/posts.js')

app.use(express.static('public'))



//Routing

app.use('/api/posts', postsRouter)



app.listen(port, () =>{
    console.log(`State guardando il mio blog sulla porta ${port}`)
})