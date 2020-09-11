const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json())

app.use(cors())

const posts = {};

app.get("/posts", (req, res) => {

    res.json({posts:posts})

})

app.post("/events", (req, res) => {

    const event = req.body//extract the event from the body

    if (event.type === "PostCreated") return posts[event.data.id] = {...event.data, comments:[]}//if its a post created event, add a new property object
    else if(event.type === "CommentCreated") return posts[event.data.post_id].comments.push({id, content} = event.data)//if its a comment, find the object and insert the comment

    res.send({})

})

app.listen(4002, () => {

    console.log("Query running on 4002")

})