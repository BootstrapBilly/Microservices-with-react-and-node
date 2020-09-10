const express = require("express")
const body_parser = require("body-parser")
const axios = require("axios")

const app = express()

app.use(body_parser.json())

app.post("/events", (req, res) => {

    const event = req.body//extract the event from the req body

    console.log(event)

    axios.post("http://localhost:4000/events", event)
    axios.post("http://localhost:4001/events", event)

    res.json({status:"OK"})

})

app.listen(4005, () => {

    console.log("Event bus running on 4005")

})

