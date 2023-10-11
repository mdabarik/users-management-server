const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5300

// middleware
app.use(cors())
app.use(express.json())

const users = [
    {
        id: 1,
        name: 'Barik',
        email: 'barik@gmail.com'
    },
    {
        id: 2,
        name: 'Coding',
        email: 'coding@gmail.com'
    },
    {
        id: 3,
        name: 'Problem Solving',
        email: 'foding@gmail.com'
    }
]

app.get('/', (req, res) => {
    res.send("useeeers managemeaant server is running")
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/users', (req, res) => {
    console.log('post api hitting...');
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser)
})

app.listen(port, () => {
    console.log("server is running... at port: " + port)
})