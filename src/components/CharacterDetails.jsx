import { PUBLIC_KEY, HASH_KEY, BASE_URL } from '../config';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CharacterDetails.css'

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const response = await fetch(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH_KEY}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCharacter(data.data.results[0]);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCharacterDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Character Details</h1>
      <h2>{character.name}</h2>
      <p>{character.description}</p>
      <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
    </div>
  );
};

export default CharacterDetails;
