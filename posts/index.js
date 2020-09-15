const express = require("express")
const { randomBytes } = require("crypto")
const body_parser = require("body-parser")
const cors = require("cors")
const axios = require("axios")

const app = express()

const posts = {}

app.use(cors())

app.use(body_parser.json())

app.get("/posts", (req, res) => {

    res.send(posts)

})

app.post("/posts", async (req, res) => {

    const title = req.body.title//extract the title from the body
    const id = randomBytes(4).toString("hex")//generate a random string for the id

    posts[id] = {
        id, title
    }

   await axios.post("http://localhost:4005/events", {//send the event to the event bus

        type:"PostCreated",
        data:{
            id:id,
            title:title
        }

    })

    res.status(201).send(posts[id])

})

app.post("/events", (req, res) => {

    const event = req.body
    
    res.json({message:"event caught"})
})

app.listen(4000, () => {

    console.log("updateddcd")
    console.log("Posts running on 4000")

})