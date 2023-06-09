import React from 'react';
import './App.css';
import './global.css';
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => null} label="button" />
      </header>
    </div>
  );
}

export default App;
