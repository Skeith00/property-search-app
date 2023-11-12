import React from 'react';
import './App.css';
import PropertySearch from './component/PropertySearch';
import {SearchProvider} from './context/Contexts.js';

function App(){
    return (
        <SearchProvider>
            <div className="App">
                <PropertySearch />
            </div>
        </SearchProvider>
  )
}

export default App;
