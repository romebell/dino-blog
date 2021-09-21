import React, { useState } from "react";
import Comment from "./Comment.js";
import Alert from "react-bootstrap/Alert";
import VFX from "react-vfx";

function Dino(props) {
  let [state, setState] = useState({
    body: props.body,
    tempBody: "",
  });
  console.log(state); // { body: 'Check out this body property', tempBody: ''}

  let allComments = props.comments.map(function (c, i) {
    return <Comment key={i} body={c.comment} username={c.username} />;
  });

  // handleBodyEdit
  const handleBodyEdit = () => {
      let input = prompt("What is the new edit for the blog post?");
      console.log(input);
      setState({ body: input });
  };

  // handleFormEdit
  const handleFormEdit = (e) => {
    e.preventDefault();
    setState({ body: state.tempBody });
  };

  return (
    <div>
      <h1>{props.title} Blog!</h1>
      <p>Written by: {props.author}</p>
      <form onSubmit={handleFormEdit}>
        <label htmlFor="body">Add new blogpost: </label>
        <input
          type="text"
          name="body"
          onChange={(e) => setState({ tempBody: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
      <br />
       
      <br />
      <Alert style={{ marginLeft: "10%", marginRight: "10%"}}variant="success">
        <Alert.Heading>Blog Post</Alert.Heading>
        <p>{state.body}</p>
        <button onClick={handleBodyEdit}>Edit Post</button>
        <hr />
        <p className="mb-0">{props.author}</p>
      </Alert>

      <div className="com">
        <h3>Comments:</h3>
        {allComments}
      </div>
    </div>
  );
}

export default Dino;
