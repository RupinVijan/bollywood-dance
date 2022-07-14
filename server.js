const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 8000
const pathname=path.join(__dirname + "/public")

app.use(express.static(pathname))
app.use(express.urlencoded({extended:false}))


app.get('/', (req, res) => {
    res.sendFile(path.join(pathname + "/index.html"));
})
app.get('/login', (req, res) => {
    res.sendFile(path.join(pathname + "/login.html"));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})