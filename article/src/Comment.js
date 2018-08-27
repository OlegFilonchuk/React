import React from 'react';

export default function Comment(props){
    const {user, text} = props.comment;
    return(
        <div>
            <div>{text}</div>
            <p><b>by {user}</b></p>
        </div>
    )
}