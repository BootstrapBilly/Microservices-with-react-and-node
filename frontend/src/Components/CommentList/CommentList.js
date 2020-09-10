import axios from "axios"
import React, { useState, useEffect } from 'react'

const CommentList = ({ post_id }) => {

    const [comments, set_comments] = useState([])

    const fetch_comments = async () => {

        const response = await axios.get(`http://localhost:4001/posts/${post_id}/comments`)

        set_comments(response.data[post_id])

    }

    useEffect(() => { fetch_comments() }, [])



    return (

        <ul>

            {comments && comments.map(comment => {

                return (<li key={comment.id}>

                    <h7>{comment.content}</h7>

                </li>)//then iterate as normal

            })
            }
        </ul>

    )

}

export default CommentList
