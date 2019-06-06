import React from 'react';
import './App.css';
import Nav from './nav.js'
import ZipSearch from './zipSearch.js'
import ZipDisplay from './zipDisplay.js'
import CitySearch from './citySearch.js'
function App() {

  return (
    <div>
      <Nav/>

      <div className="app-flex-container">
        <ZipSearch/>
        <CitySearch/>
      </div>
    </div>
  );
}
export default App;
