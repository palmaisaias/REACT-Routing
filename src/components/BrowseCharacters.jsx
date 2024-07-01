import React from 'react';
import { Link } from 'react-router-dom';

const BrowseCharacters = () => {
  const characters = [
    { id: 1009610, name: 'Spider-Man' },
    { id: 1009220, name: 'Captain America' },
    { id: 1009189, name: 'Black Widow' },
    { id: 1009368, name: 'Iron Man' },
    { id: 1009664, name: 'Thor' },
    { id: 1009187, name: 'Black Panther' },
    { id: 1009662, name: 'Thing' },
    { id: 1009282, name: 'Doctor Strange' },
    { id: 1009351, name: 'Hulk' },
    { id: 1009366, name: 'Invisible Woman' },
    { id: 1009281, name: 'Doctor Doom' },
    { id: 1009504, name: 'Professor X' },
    { id: 1009619, name: 'Gwen Stacy' },
    { id: 1009508, name: 'Kitty Pryde' },
    { id: 1009299, name: 'Fantastic 4' },
    { id: 1009471, name: 'Nick Fury' },
    { id: 1009452, name: 'Moon Knight' },
    { id: 1009268, name: 'Deadpool' },
    { id: 1009707, name: 'Wasp' },
    { id: 1009356, name: 'Human Torch' }
  ];

  return (
    <div>
      <h2>Browse Characters</h2>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            <Link to={`/character-details/${character.id}`}>
              {character.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseCharacters;
