const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json())

app.use(cors())

const posts = {};

app.get("/posts", (req, res) => {

    res.json({ posts: posts })

})

app.post("/events", (req, res) => {

    const event = req.body//extract the event from the body

    if (event.type === "PostCreated") return posts[event.data.id] = { ...event.data, comments: [] }//if its a post created event, add a new property object
    else if (event.type === "CommentCreated") return posts[event.data.post_id].comments.push({ id, content, status } = event.data)//if its a comment, find the object and insert the comment
    else if (event.type === "CommentModerated") {

        const comment_to_update = posts[event.data.post_id].comments.find(comment => comment.id === event.data.id)

        console.log(posts[event.data.post_id].comments)
        console.log(comment_to_update)

        return comment_to_update.status = event.data.status

    }


        res.send({})

    })

app.listen(4002, () => {

    console.log("Query running on 4002")

})