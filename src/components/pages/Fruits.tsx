import cards from "../Cards"
import Card from "../Card";
import cherry from '../../assets/img/cherry.jpg';
import kiwi from '../../assets/img/kiwi.jpg';
import mango from '../../assets/img/mango.jpg';
import grape from '../../assets/img/grape.jpg';
import peach from '../../assets/img/peach.jpg';
import banana from '../../assets/img/banana.jpg';
import pear from '../../assets/img/pear.jpg';
import apple from '../../assets/img/apple.jpg';
import cherry_sound from '../../assets/audio/cherry.mp3';
import kiwi_sound from '../../assets/audio/kiwi.mp3';
import mango_sound from '../../assets/audio/mango.mp3';
import grape_sound from '../../assets/audio/grape.mp3';
import peach_sound from '../../assets/audio/peach.mp3';
import banana_sound from '../../assets/audio/banana.mp3';
import pear_sound from '../../assets/audio/pear.mp3';
import apple_sound from '../../assets/audio/apple.mp3';
import { SwitchProp } from "./MainPage";

export const imgPath = [cherry, kiwi, mango, grape, peach, banana, pear, apple];
export const audioPath = [cherry_sound, kiwi_sound, mango_sound, grape_sound, peach_sound, banana_sound, pear_sound, apple_sound];
export const wordList = ['cherry', 'kiwi', 'mango', 'grape', 'peach', 'banana', 'pear', 'apple'];


export default function Emotions ({ value }: SwitchProp): JSX.Element {
 const arrCards:JSX.Element =  cards[8].map((card: string, i: number) => {
    const wordText: string = cards[8][i].word;    
    const translationText: string = cards[8][i].translation;    
    return <Card isOn={value} word={wordText} translation={translationText} image={imgPath[i]} audioSrc={audioPath[i]}/>
  })
  return arrCards  
}