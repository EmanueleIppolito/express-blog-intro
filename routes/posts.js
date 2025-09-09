const express = require('express');
const router = express.Router();

let post =[
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

router.get('/', (req, res) =>{
    res.send('<h1>Server del mio blog</h1>')
})


//CRUD Operations
// Index
router.get('/', (req, res) =>{
    res.json({post})
})

// Show

router.get('/:id', (req, res) =>{
    res.send('Show the single post with ID ' + req.params.id)
})

//Store

router.post('/', (req, res) => {
    res.send('Create a new post')
})

// Update

router.put('/:id', (req, res) => {
    res.send('Update the entire post with ID ' + req.params.id)
})

//Modify

router.patch('/:id', (req, res) => {
    res.send('Partial update for a single post with ID ' + req.params.id)
})

//Destroy

router.delete('/:id', (req, res) =>{
    const id = parseInt(req.params.id)
    post = post.filter(articoli => articoli.id !== id)
    res.send('Delete the single post with ID ' + req.params.id)
})


module.exports = router;