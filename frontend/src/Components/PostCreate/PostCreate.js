import React, { useState } from 'react'
import axios from "axios"

const PostCreate = () => {

    //*states
    const [title, set_title] = useState("")

    const handle_submit = async (e) => {

        e.preventDefault()

        await axios.post("http://localhost:4000/posts", {

            title: title

        })

        set_title("")

    }

    return (

        <form onSubmit={handle_submit}>

            <div className={"form-group"}>

                <label>Title</label>
                <input className={"form-control w-25"} value={title} onChange={e => set_title(e.target.value)} />

            </div>

            <button className={"btn btn-primary"}>Submit</button>

        </form>

    )

}

export default PostCreate
