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
const graph2 = `
pie title Pets adopted by volunteers
	"Dogs" : 386
	"Cats" : 85
	"Rats" : 15
`
// const graph3 =fetch('/test.txt')



function App() {
  return (
    <div className="App">
      <Mermaid id="graph" content={graph} />
      <Mermaid id="graph2" content={graph2} />
    </div>
  );
}

export default App;

