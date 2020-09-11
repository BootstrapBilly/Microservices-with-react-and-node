const express = require("express")
const body_parser = require("body-parser")
const cors = require("cors")
const axios = require("axios")

const app = express()

app.use(cors())

app.use(body_parser.json())

app.post("/events", async (req, res) => {

    const event = req.body

    let status = "approved"

    if (event.data.content.includes("orange")) status = "rejected"

    await axios.post("http://localhost:4005/events", {

        type: "CommentModerated",
        data: {
            ...event.data,
            status: status
        }

    })

})


app.listen(4003, () => {

    console.log("Moderation running on 4003")

})