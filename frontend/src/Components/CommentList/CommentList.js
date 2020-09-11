import React from 'react'

const CommentList = (props) => {

    console.log(props.comments)

    return (

        <ul>

            {props.comments && props.comments.map(comment => {

                return (<li key={comment.id}>

                    <p>{comment.status === "pending" ? "Pending moderation" : 
                    comment.status === "rejected" ? "Comment has been censored " :
                    comment.content}</p>

                </li>)//then iterate as normal

            })
            }

        </ul>

    )

}

export default CommentList
