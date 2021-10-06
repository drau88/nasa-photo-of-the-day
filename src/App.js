import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import MainDisplay from './maindisplay';



function App() {

const [apiData, setApiData] = useState({});

useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(response => {
      console.log(response);
      setApiData(response.data);
  }).catch(err => {
      console.error(err);
  });
}, [])


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <MainDisplay apiData={apiData}></MainDisplay>
    </div>
  );
}

export default App;
