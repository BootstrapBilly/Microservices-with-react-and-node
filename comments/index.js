const express = require("express")
const { randomBytes } = require("crypto")
const body_parser = require("body-parser")
const cors = require("cors")

const app = express()

const comments_by_post_id = {}

app.use(cors())

app.use(body_parser.json())

app.get("/posts/:id/comments", (req, res) => {

    res.send(comments_by_post_id || [])

})

app.post("/posts/:id/comments", (req, res) => {

    const content = req.body.content//extract the content from the body
    const id = randomBytes(4).toString("hex")//generate a random string for the id

    const comments = comments_by_post_id[req.params.id] || []//get the existing comments for the post

    comments.push({id:id, content:content})//push in the new comment

    comments_by_post_id[req.params.id] = comments//update the comments object to show the new comments

    res.status(201).send(comments_by_post_id)
})

app.listen(4001, () => {

    console.log("Server running")

})