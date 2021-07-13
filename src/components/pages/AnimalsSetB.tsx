import cards from "../Cards"
import Card from "../Card";
import bird from '../../assets/img/bird.jpg';
import fish from '../../assets/img/fish1.jpg';
import frog from '../../assets/img/frog.jpg';
import giraffe from '../../assets/img/giraffe.jpg';
import lion from '../../assets/img/lion.jpg';
import mouse from '../../assets/img/mouse.jpg';
import turtle from '../../assets/img/turtle.jpg';
import dolphin from '../../assets/img/dolphin.jpg';
import bird_sound from '../../assets/audio/bird.mp3';
import fish_sound from '../../assets/audio/fish.mp3';
import frog_sound from '../../assets/audio/frog.mp3';
import giraffe_sound from '../../assets/audio/giraffe.mp3';
import lion_sound from '../../assets/audio/lion.mp3';
import mouse_sound from '../../assets/audio/mouse.mp3';
import turtle_sound from '../../assets/audio/turtle.mp3';
import dolphin_sound from '../../assets/audio/dolphin.mp3';
import { SwitchProp } from "./MainPage";

export const imgPath = [bird, fish, frog, giraffe, lion, mouse, turtle, dolphin];
export const audioPath = [bird_sound, fish_sound, frog_sound, giraffe_sound, lion_sound, mouse_sound, turtle_sound, dolphin_sound];
export const wordList = ['bird', 'fish', 'frog', 'giraffe', 'lion', 'mouse', 'turtle', 'dolphin'];

export default function AnimalsSetB ({ value }: SwitchProp): JSX.Element {
 const arrCards:JSX.Element =  cards[4].map((card: string, i: number) => {
    const wordText: string = cards[4][i].word;    
    const translationText: string = cards[4][i].translation;    
    return <Card isOn={value} word={wordText} translation={translationText} image={imgPath[i]} audioSrc={audioPath[i]} />
  })
  return arrCards  
}