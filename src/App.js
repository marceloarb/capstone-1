import React from 'react';
import './App.css';
import Data from './data.json'

function App() {
  return (
    <div className="App">
      <div>
        { Data.map(post =>{
          return(
            <h1>{post.title}</h1>
          )
        })}
      </div>
    </div>
  );
}

export default App;
