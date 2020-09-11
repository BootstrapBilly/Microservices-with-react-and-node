const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const axios = require("axios")
const e = require("express")

const app = express()

app.use(bodyParser.json())

app.use(cors())

const posts = {};

const handle_event = event => {

    if (event.type === "PostCreated") return posts[event.data.id] = { ...event.data, comments: [] }//if its a post created event, add a new property object
    else if (event.type === "CommentCreated") return posts[event.data.post_id].comments.push({ id, content, status } = event.data)//if its a comment, find the object and insert the comment
    else if (event.type === "CommentModerated") {

        const comment_to_update = posts[event.data.post_id].comments.find(comment => comment.id === event.data.id)//find the comment which needs to be updated

        return comment_to_update.status = event.data.status//update the comment's status

    }

}

app.get("/posts", (req, res) => {

    res.json({ posts: posts })

})

app.post("/events", (req, res) => {

    const event = req.body//extract the event from the body

    handle_event(event)

    res.send({})

})

app.listen(4002, async () => {

    console.log("Query running on 4002")

    const response = await axios.get("http://localhost:4005/events")

    for(let event of response.data.events){

        console.log("processing", event.type)

        handle_event(event)
    }

})