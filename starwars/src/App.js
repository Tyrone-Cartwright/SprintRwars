import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import WarriorListing from './components/WarriorListing'


const apiUrl = 'https://swapi.co/api/people/'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
 
    // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
       console.log(response);
        setCharacters(response.data.results);
      })
      .catch(error => console.log(error))
  }, [])

  //console.log(characters);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div>
        {characters.map((character, index) => <WarriorListing
          key={index} 
          name={character.name} 
          birthyear={character['birth_year']}
          height={character.height}          
          gender={character.gender}  />)}
      </div>
    </div>
  );
}

export default App;
