const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    const a = req.query.a
    const b = req.query.b

    result = a + b

    if (a == 2) {
        result = 40
    }

    res.json({
        message: "Hello from server 1!",
        result: result,
    }) 
})

app.post("/user",(req, res) => {
    //create new user, product, game
    const name = req.body.name
    
    res.json({
        "message":"Created, " + name

    })


})

app.listen(3000, () => {
    console.log("Server starts successfully")
})