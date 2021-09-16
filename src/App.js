import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dino from './Dino';

function App() {
  let dino = {
    title: "Dinosaurs are awesome",
    author: "Stealthy Stegosaurus",
    body: "Check out this body property",
    comments: [
      {
        username: "romebell",
        comment: "First!"
      },
      {
        username: "romebell",
        comment: "Great post"
      },
      {
        username: "romebell",
        comment: "Hire this author now!"
      },
    ]
  }

  

  return (
    <div className="App">
      <Dino 
        title={dino.title}
        author={dino.author}
        body={dino.body}
        comments={dino.comments} 
      />
    </div>
  );
}

export default App;
