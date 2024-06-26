import React from 'react';
import CharacterList from './components/CharacterList';


const App = () => {
  return (
    <div className="App">
      <CharacterList />
    </div>
  );
};

export default App;

// The characterDetail component is integrated and called in the CharacterList component.
// The program functions as requested by the assignment, I simply didnt see the need to include it in App.