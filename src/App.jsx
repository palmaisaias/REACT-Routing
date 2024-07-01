import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';
import CharacterDetails from './components/CharacterDetails';
import Comics from './components/Comics';
import BrowseCharacters from './components/BrowseCharacters';
import NotFound from './components/NotFound';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/comics" activeClassName="active">
                Comics
              </NavLink>
            </li>
            <li>
              <NavLink to="/browse-characters" activeClassName="active">
                Browse Characters
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character-details/:id" element={<CharacterDetails />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/browse-characters" element={<BrowseCharacters />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
