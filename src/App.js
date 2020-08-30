import React from 'react';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

import './App.css';
//const word = "Hello";

var word = "  "; 


var rand = Math.floor(Math.random() * 5);
switch (rand) {
  case 0:  
    word = "apple";
    break;
  case 1: 
    word = "banana";
    break;
  case 2:  
    word = "pineapple";
    break;
  case 3:      
    word = "fruit";
    break;
  case 4:      
    word = "lemon";
    break;  
}

function App() {
  return (
    <div>
      <WordCard value={word} />
    </div>
  );
}
export default App;