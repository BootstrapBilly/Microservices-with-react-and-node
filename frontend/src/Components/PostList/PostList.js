import React, { useState, useEffect } from 'react'
import axios from "axios"

//components
import CommentCreate from "../CommentCreate/CommentCreate"
import CommentList from "../CommentList/CommentList"

export const PostList = () => {

    const [posts, set_posts] = useState({})

    const fetch_posts = async () => {

        const response = await axios.get("http://localhost:4002/posts")

        set_posts(response.data.posts)

    }

    useEffect(() => { fetch_posts() }, [])

    return (

        <div className="d-flex flex-row flex-wrap justify-content-between">

            {
                Object.values(posts)//First convert the object to an array
                    .map(post =>

                        <div className="card d-flex p-4" style={{ width: "30%", marginBottom: "20px" }} key={post.id}>

                            <CommentList post_id={post.id} comments={post.comments}/>
                            <h3>{post.title}</h3>
                            <CommentCreate post_id={post.id} />

                        </div>)//then iterate as normal
            }

        </div>

    )

}

export default PostList
