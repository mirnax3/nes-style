import React from 'react';
import './global.css';
import "nes.css/css/nes.min.css";
import { Button } from "./components/Button";

function App() {
  return (
    <html>
      <head title="App">
        <title>MirioUI</title>
      </head>
      <body>
        <Button onClick={() => null} label="button" />
      </body>
    </html>

  );
}

export default App;
