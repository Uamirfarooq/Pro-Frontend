import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        console.log(response.data);
        setJokes(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div>
      <h1>{`Total Jokes: ${jokes.length}`}</h1>
      <p>Here are the jokes:</p>
      {jokes.map((joke) => ( 
        <div key={joke.id}>
          <h3>{`Joke Owner: ${joke.name}`}</h3> 
          <p>{joke.title}</p> 
        </div>
      ))}
    </div>
  );
}

export default App;
