import React from 'react'

const CommentList = (props) => {

    return (

        <ul>

            {props.comments && props.comments.map(comment => {

                return (<li key={comment.id}>

                    <p>{comment.content}</p>

                </li>)//then iterate as normal

            })
            }

        </ul>

    )

}

export default CommentList
