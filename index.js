const express = require("express")

const app = express()

app.get('/',(req,res) => {
    res.send('Sending Hi response');
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server listening in http://localhost:${PORT}`)
})