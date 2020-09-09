const express = require("express")
const { randomBytes } = require("crypto")
const body_parser = require("body-parser")

const app = express()

const posts = {}

app.use(body_parser)

app.get("/posts", (req, res) => {

    res.send(posts)

})

app.post("/posts", (req, res) => {

    const title = req.body//extract the title from the body
    const id = randomBytes(4).toString("hex")//generate a random string for the id

    posts[id] = {
        id, title
    }

    res.status(201).send(posts[id])

})

app.listen(4000, () => {

    console.log("Server running")
    
})