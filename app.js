
const path = require('path')
const express = require('express')
const app = express()
const port = 3000

const root = path.join(__dirname, 'public')

const jokes = [
    {
        id: 1,
        joke: "Why don't scientists trust atoms?",
        punchline: "Because they make up everything!"
    },
    {
        id: 2,
        joke: "Why did the math book look sad?",
        punchline: "Because it had too many problems."
    },
    {
        "id": 3,
        "joke": "Why did the scarecrow win an award?",
        "punchline": "Because he was outstanding in his field."
    },
    {
        "id": 4,
        "joke": "Why don't skeletons fight each other?",
        "punchline": "They don't have the guts."
    },
    {
        "id": 5,
        "joke": "What do you call fake spaghetti?",
        "punchline": "An impasta."
    },
    {
        "id": 6,
        "joke": "Why did the bicycle fall over?",
        "punchline": "It was two-tired."
    },
    {
        "id": 7,
        "joke": "How do you organize a space party?",
        "punchline": "You planet."
    },
    {
        "id": 8,
        "joke": "Why did the golfer bring two pairs of pants?",
        "punchline": "In case he got a hole in one."
    },
    {
        "id": 9,
        "joke": "What do you call cheese that isn't yours?",
        "punchline": "Nacho cheese."
    },
    {
        "id": 10,
        "joke": "Why did the tomato blush?",
        "punchline": "It saw the salad dressing."
    },
    {
        "id": 11,
        "joke": "What do you call a bear with no teeth?",
        "punchline": "A gummy bear."
    },
    {
        "id": 12,
        "joke": "Why did the math book look sad?",
        "punchline": "Because it had too many problems."
    }
]

function sendIndexRoot(res) {
    res.sendFile('index.html', { root })
}

app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    sendIndexRoot(res)
})

app.get('/joke/:id', (req, res) => {
    sendIndexRoot(res)
})

app.get('/api/v1/joke/:id', (req, res) => {
    const { id } = req.params
    if (jokes.find(j => j.id.toString() === id.toString())) {
        res.send(jokes.find(j => j.id.toString() === id.toString()))
    }
    else res.send({ error: { message: `Joke with id ${id} not found.`}})
})

app.get('/api/v1/random-joke', (req, res) => {
    const r = Math.floor(Math.random() * jokes.length)
    res.send(jokes[r])
})

app.listen(port, () => console.log(`http://localhost:${port}/`))