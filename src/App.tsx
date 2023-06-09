import React from 'react';
import './App.css';
import './global.css';
import "nes.css/css/nes.min.css";
import { Button } from "./components/Button";

function App() {
  return (
    <html>
      <head title="App">
        <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet" />
        <title>MirioUI</title>
      </head>
      <body>
        <Button onClick={() => null} label="button" />
      </body>
    </html>

  );
}

export default App;
