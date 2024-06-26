import React, { useEffect, useState } from 'react';
import { getCharacters } from '../services/apiService';
import './CharacterList.css';
import CharacterDetail from './CharacterDetail';

const CharacterList = () => {
  // these are the state hooks for storing states and also providing functions to update the state variables.
  const [characters, setCharacters] = useState([]); // storing characters here
  const [loading, setLoading] = useState(true); // gives us a loading status
  const [selectedCharacterId, setSelectedCharacterId] = useState(null); // this is the state in which we store the selected character ID for the Detail functionality

  useEffect(() => {
    const fetchData = async () => {
      // since we're fetching data here, we use async and await to execute this portion. Await pauses the execution until the async operation is done
      const data = await getCharacters();
      setCharacters(data); //updates the state of of 'characters' with the data that we just fetched
      setLoading(false); //this is purely for ease of use. a false value here means the fetching is complete
    };
  
    fetchData();
  }, []); //this empty array here just assures that this will only run once  after the first render

  if (loading) return <p>Loading...</p>;

  const handleCharacterClick = (id) => {
    console.log('Character ID clicked:', id);
    setSelectedCharacterId(id); // setter function for updating the id when necessary
  };

return (
  <div>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjmHn7hDycWvYvGnj50dxygz2EUz8MBKKCqg&s" alt="Marvel logo" />
    <h1>Marvel Characters</h1>
    <ul className="character-grid">
      {characters.map(character => (
        <li key={character.id} className="character-card" onClick={() => handleCharacterClick(character.id)}>
          <h2>{character.name}</h2>
          <img 
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
            alt={character.name} 
            style={{ width: '150px', height: '150px' }} 
          />
          {selectedCharacterId === character.id && <CharacterDetail characterId={selectedCharacterId} />}
          {/* this checks if the ID of the cahracter thats been clicked is the same as the ID of the character
          thats currently being processed in the list. Doing this since I wanted a way to show the information insode of the
          character card */}
        </li>
      ))}
    </ul>
  </div>
);

};

export default CharacterList;
