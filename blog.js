const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.listen(port, () =>{
    console.log(`State guardando il mio blog sulla porta ${port}`)
})


const post =[
    {
        titolo: "Ciambellone",
        contenuto: "Ricetta Ciambellone",
        foto: "/images/ciambellone.jpeg",
        tag: ["dolce", "veloce"]
    },
    {
        titolo: "Cracker di Barbabietola",
        contenuto: "Ricetta Cracker di barbabietola",
        foto: "/images/cracker_barbabietola.jpeg",
        tag: ["salato", "healty"]
    },
    {
        titolo: "Pane fritto dolce",
        contenuto: "Ricetta pane fritto dolce",
        foto: "/images/pane_fritto_dolce.jpeg",
        tag: ["dolce", "fritto"]
    },
    {
        titolo: "Pasta di barbabietola",
        contenuto: "Ricetta pasta di barbabietola",
        foto: "/images/pasta_barbabietola.jpeg",
        tag: ["salato", "fit"]
    },
    {
        titolo: "Torta Paesana",
        contenuto: "Ricetta torta paesana",
        foto: "/images/torta_paesana.jpeg",
        tag: ["dolce", "feste"]
    }
]


//Routes

app.get('/', (req, res) =>{
    res.send('<h1>Server del mio blog</h1>')
})

app.get('/bacheca', (req, res) =>{
    res.json({post})
})