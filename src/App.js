import React from 'react';
import './App.css';
import Lister from './lister.jsx';
import ControlledInput from './controlledInput.jsx';

function App() {
    return (
        <div className="App">
            <ControlledInput />
            <Lister />
        </div>
    );
}

export default App;
