const express = require("express")
const body_parser = require("body-parser")
const axios = require("axios")

const app = express()

app.use(body_parser.json())

const events = []

app.post("/events", (req, res) => {

    const event = req.body//extract the event from the req body

    // if (event.type === "CommentModerated") {

    //     axios.post("http://localhost:4001/events", event)

    // }

    // if (event.type === "CommentUpdated") {

    //     return axios.post("http://localhost:4002/events", event)

    // }

    //fire out the event to the services which need it
    axios.post("http://post-service-cip:4000/events", event)
    // axios.post("http://localhost:4001/events", event)
    // axios.post("http://localhost:4002/events", event)
    // axios.post("http://localhost:4003/events", event)//moderation service

    events.push(event)

    res.json({ status: "OK" })

})

app.get("/events", (req, res) => {

    return res.json({ events: events })

})

app.listen(4005, () => {

    console.log("Event bus running on 4005")

})

