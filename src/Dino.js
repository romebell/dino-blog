import React from 'react';
import Comment from './Comment.js';

function Dino(props) {
    console.log(props.name);
    let allComments = props.comments.map(function(c, i){
        return <Comment key={i} body={c}/>
    });

    return (
        <div>
            <h1>{props.title}!</h1>
            <p>{props.author}</p>
            <p>{props.body}</p>
            <div className="com">
                <h3>Comments:</h3>
                {allComments}
            </div>
        </div>
    );
}

export default Dino;