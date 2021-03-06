import React , { useState } from 'react';
import _, { attempt } from 'lodash';
import CharacterCard from './CharacterCard';

var temp = " ";
var yourcharacter = " ";

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 0,
        guess: '',
        completed: false
        }
}

export default function WordCard(props){

    const [state, setState]= useState(prepareStateFromWord(props.value))
    
    yourcharacter = state.guess;

    const activationHandler = c => {
        console.log(`${c} has been activated.`)

        let guess = state.guess + c
        setState({...state, guess})
        
        if(guess.length == state.word.length){
            if (guess == state.word){
                alert("Congratulations!, you do it right");
                setState({...state, completed: true})
                window.location.reload(false);

            } else {
                    alert("try agian !!");
                    state.attempt += 1;
                setState({...state, guess: '', attempt: state.attempt})    
                }
            }
            temp = state.attempt;
        }
      
    return (
        <div>
            <div class="AttemptAndAnswer">
                <h2> Attempt : {temp}
                <br></br>
                <br></br>
                Your Answer : {yourcharacter}</h2>
            </div>
            
            { 
                state.chars.map((c, i) =>
                <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>) 
            }
        </div>
    );   
}


