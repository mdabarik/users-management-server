const express = require('express')
const app = express()
const port = process.env.PORT || 5300

app.get('/', (req, res) => {
    res.send("useeeers management server is running")
})

app.listen(port, () => {
    console.log("server is runnint: " + port)
})