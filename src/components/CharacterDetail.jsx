import React, { useEffect, useState } from 'react';
import { PUBLIC_KEY, HASH_KEY, BASE_URL } from '../config';

const CharacterDetail = ({ characterId }) => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      const response = await fetch(`${BASE_URL}characters/${characterId}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH_KEY}`);
      const data = await response.json();
      setCharacter(data.data.results[0]);
      setLoading(false);
    };

    fetchCharacterDetails();
  }, [characterId]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="character-detail">
      <h2>{character.name}</h2>
      <p>{character.description}</p>
      <h3>Comics:</h3>
      <ul>
        {character.comics.items.map(comic => (
          <li key={comic.resourceURI}>{comic.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterDetail;
