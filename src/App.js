import React from 'react';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

import './App.css';
//const word = "Hello";

var word = "  "; 
var text = "  ";

var rand = Math.floor(Math.random() * 10);
switch (rand) {
  case 0:
    text = 'เกมเรียงคำศัพท์ ในหมวดผลไม้'  
    word = "apple";
    break;
  case 1: 
    text = 'เกมเรียงคำศัพท์ ในหมวดผลไม้'
    word = "banana"; 
    break;
  case 2:
    text = 'เกมเรียงคำศัพท์ ในหมวดผลไม้'  
    word = "pineapple";
    break;
  case 3: 
    text = 'เกมเรียงคำศัพท์ ในหมวดผลไม้'     
    word = "fruit";
    break;
  case 4: 
    text = 'เกมเรียงคำศัพท์ ในหมวดผลไม้'     
    word = "lemon";
    break;
  case 5:
    text = 'เกมเรียงคำศัพท์ ในหมวดสัตว์'  
    word = "chicken";
    break;
  case 6: 
    text = 'เกมเรียงคำศัพท์ ในหมวดสัตว์'
    word = "bug"; 
    break;
  case 7:
    text = 'เกมเรียงคำศัพท์ ในหมวดสัตว์'  
    word = "bird";
    break;
  case 8: 
    text = 'เกมเรียงคำศัพท์ ในหมวดสัตว์'     
    word = "baboon";
    break;
  case 9: 
    text = 'เกมเรียงคำศัพท์ ในหมวดสัตว์'     
    word = "dolphin";
    break;      
}

function App() {
  return (
    <body>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h1>{text}</h1>
    <br></br>
    <br></br>
      <div class="cardlayout">
        <WordCard value={word} />
      </div>
  </body> 
  );
}
export default App;