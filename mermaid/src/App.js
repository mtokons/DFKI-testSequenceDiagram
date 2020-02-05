import React from 'react';
import './App.css';
import Mermaid from './Mermaid';

const graph = `
sequenceDiagram
  Alice->>+John: Hello John, how are you?
  Alice->>+John: John, can you hear me?
  John-->>-Alice: Hi Alice, I can hear you!
  John-->>-Alice: I feel great!
`



function App() {
  return (
    <div className="App">
      <Mermaid id="graph1" content={graph} />
    </div>
  );
}

export default App;

