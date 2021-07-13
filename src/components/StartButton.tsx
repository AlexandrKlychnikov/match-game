import React from "react";
import { SwitchProp } from "./pages/MainPage";
import "../components/start-button.css"
import { shuffle } from "./Utils";
import { useLocation } from 'react-router-dom';
import { audioPath as audioPathActionsSetA }  from "./pages/ActionsSetA";
import { audioPath as audioPathActionsSetB }  from "./pages/ActionsSetB";
import { audioPath as audioPathAnimalsSetA }  from "./pages/AnimalsSetA";
import { audioPath as audioPathAnimalsSetB }  from "./pages/AnimalsSetB";
import { audioPath as audioPathClothes } from "./pages/Clothes";
import { audioPath as audioPathEmotions } from "./pages/Emotions";
import { audioPath as audioPathFood } from "./pages/Food";
import { audioPath as audioPathFruits }  from "./pages/Fruits";
import { indicatorValue } from "./Indicator";
import Star from "../components/Indicator";
import ReactDOM from "react-dom";


const soundStor = [
  audioPathActionsSetA, 
  audioPathActionsSetB, 
  audioPathAnimalsSetA, 
  audioPathAnimalsSetB, 
  audioPathClothes, 
  audioPathEmotions,
  audioPathFood,
  audioPathFruits
]

const categoryPathList = ["/ActionsSetA", "/ActionsSetB", "/AnimalsSetA", "/AnimalsSetB", "/Clothes", "/Emotions", "/Food", "/Fruits"]

function makeSound(path: string) {
  let audio = new Audio(); 
  audio.src = path; 
  audio.autoplay = true;
}

function handlePopstate() {
  const start = document.getElementById('start');
  if (start) start.innerText = 'START GAME'
}

window.addEventListener('popstate', handlePopstate)

// Start button
export const StartButton = ({ value }: SwitchProp) => {

  let location = useLocation().pathname;
 // const [wordsInGame, setValue] = useState(startGame);
 
  function startGame() {
    const indexArr = categoryPathList.indexOf(location);
    const categoryArr = soundStor[indexArr];
    const gameArr = shuffle(categoryArr);
    makeSound(gameArr[gameArr.length-1]);
    const lastSound = gameArr[gameArr.length-1];
    const pointIndex = lastSound.indexOf('.');
    const lastWord = lastSound.slice(14, pointIndex);
    const start = document.getElementById('start');
    start?.setAttribute('data-last', lastWord);

    const cards = document.querySelectorAll('.back-face.game')
      cards.forEach(card=> {
        card.addEventListener('click', (event) => {
          const start = document.getElementById('start');
          start?.setAttribute('data-last', lastWord);
          const element = event.target as HTMLElement;
          if (start?.getAttribute('data-last') === element.closest('.game')?.getAttribute('data-word')) {
            indicatorValue.push(true)
            ReactDOM.render(<Star succes={true} />, document.getElementById('indicator'))
            gameArr.pop()
            setTimeout(() => {makeSound(gameArr[gameArr.length-1])}, 3000)
          } else {
            indicatorValue.push(false)
            ReactDOM.render(<Star succes={false} />, document.getElementById('indicator'))
          }
        })
      })

    return gameArr;
  }

  function handleClickStart(): void {
    const start = document.getElementById('start');
    start?.classList.toggle('repeat')
    if (start && start?.classList.contains('repeat')) {
      start.innerText = 'REPEAT'
    } 
    startGame();
  }

 /* function handleOnChange(): void {
    const start = document.getElementById('start');
    if (start && value) start.innerText = 'START GAME'
  
  } */

  if (!value) {
    return (
      <button className="start-button" id="start" data-last="" onClick={handleClickStart}>START GAME</button>
    );    
  } else {
    return (
      <button className="start-button hidden repeat" data-last="" id="start">START GAME</button>
    );  

  }
}

