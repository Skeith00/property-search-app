import React from 'react';
import './App.css';
import PropertySearch from './component/search/PropertySearch';
import {SearchProvider} from './context/search.context.js';
import AppBar from "./component/AppBar";

function App(){
    return (
            <div className="App">
                <AppBar/>
                <SearchProvider>
                    <PropertySearch />
                </SearchProvider>
            </div>
  )
}

export default App;
