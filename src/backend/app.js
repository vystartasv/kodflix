const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('My Kodflix backend is running!!!!!'))

app.listen(port, () => console.log(`Backend app is listening on port ${port}!`))