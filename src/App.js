import React from 'react';
import Split from './composition/Split'
import './App.css';

function App() {
  return (
    <main className='App'>
      <Split className='left' flexBasis={2}>
        Split Left
      </Split>
      <Split className='right'>
        TEST TEXT adfla;kjsf  
      </Split>
    </main>
  );
}

export default App;