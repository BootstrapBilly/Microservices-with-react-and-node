import axios from "axios"
import React, { useState } from 'react'

const CommentCreate = ({ post_id }) => {

    //*states
    const [comment, set_comment] = useState("")

    const handle_change = e => set_comment(e.target.value)

    const handle_submit = async (e) => {

        e.preventDefault()

        await axios.post(`http://posts.com/posts/${post_id}/comments`, {

            content: comment

        })

        set_comment("")
    }

    return (

        <div>

            <form onSubmit={handle_submit}>

                <div className="form-group">

                    <label>New Comment</label>
                    <input className="form-control" value={comment} onChange={handle_change} />

                </div>

                <button className="btn btn-primary">Submit</button>

            </form>

        </div>

    )

}

export default CommentCreate
