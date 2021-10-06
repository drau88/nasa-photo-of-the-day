import React from "react";
import "./App.css";
import axios from 'axios';
import MainDisplay from './maindisplay';

axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
        console.log(response);
    }).catch(err => {
        console.error(err);
    });

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
        <MainDisplay></MainDisplay>
      </p>
    </div>
  );
}

export default App;
