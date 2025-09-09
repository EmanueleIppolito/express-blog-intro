const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.listen(port, () =>{
    console.log(`State guardando il mio blog sulla porta ${port}`)
})


const post =[
    {
        id: 1,
        titolo: "Ciambellone",
        contenuto: "Ricetta Ciambellone",
        foto: "/images/ciambellone.jpeg",
        tag: ["dolce", "veloce"]
    },
    {
        id: 2,
        titolo: "Cracker di Barbabietola",
        contenuto: "Ricetta Cracker di barbabietola",
        foto: "/images/cracker_barbabietola.jpeg",
        tag: ["salato", "healty"]
    },
    {
        id: 3,
        titolo: "Pane fritto dolce",
        contenuto: "Ricetta pane fritto dolce",
        foto: "/images/pane_fritto_dolce.jpeg",
        tag: ["dolce", "fritto"]
    },
    {
        id: 4,
        titolo: "Pasta di barbabietola",
        contenuto: "Ricetta pasta di barbabietola",
        foto: "/images/pasta_barbabietola.jpeg",
        tag: ["salato", "fit"]
    },
    {
        id: 5,
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


//CRUD Operations
// Index
app.get('/api/posts', (req, res) =>{
    res.json({post})
})

// Show

app.get('/api/posts/:id', (req, res) =>{
    res.send('Show the single post with ID' + req.params.id)
})

//Store

app.post('/api/posts/', (req, res) => {
    res.send('Create a new post')
})

// Update

app.put('/api/posts/:id', (req, res) => {
    res.send('Update the entire post with ID' + req.params.id)
})

//Modify

app.patch('/api/posts/:id', (req, res) => {
    res.send('Partial update for a single post with ID' + req.params.id)
})

//Destroy

app.delete('/api/posts/:id', (req, res) =>{
    res.send('Delete the single post with ID' + req.params.id)
})