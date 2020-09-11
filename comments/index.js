const express = require("express")
const { randomBytes } = require("crypto")
const body_parser = require("body-parser")
const cors = require("cors")
const axios = require("axios")

const app = express()

const comments_by_post_id = {}

app.use(cors())

app.use(body_parser.json())

app.get("/posts/:id/comments", (req, res) => {

    res.send(comments_by_post_id || [])

})

app.post("/posts/:id/comments", async (req, res) => {

    const content = req.body.content//extract the content from the body
    const id = randomBytes(4).toString("hex")//generate a random string for the id

    const comments = comments_by_post_id[req.params.id] || []//get the existing comments for the post

    comments.push({ id: id, content: content })//push in the new comment

    comments_by_post_id[req.params.id] = comments//update the comments object to show the new comments

    await axios.post("http://localhost:4005/events", {

        type: "CommentCreated",
        data: {
            id: id,
            content: content,
            post_id:req.params.id,
            status:"pending"
        }

    })

    res.status(201).send(comments_by_post_id)
})

app.post("/events", (req, res) => {

    const event = req.body

    res.json({message:"event caught"})

})

app.listen(4001, () => {

    console.log("Comments running on 4001")

})