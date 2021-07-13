import cards from "../Cards"
import Card from "../Card";
import cry from '../../assets/img/cry.jpg';
import dance from '../../assets/img/dance.jpg';
import dive from '../../assets/img/dive.jpg';
import draw from '../../assets/img/draw.jpg';
import fish from '../../assets/img/fish.jpg';
import fly from '../../assets/img/fly.jpg';
import hug from '../../assets/img/hug.jpg';
import jump from '../../assets/img/jump.jpg';
import cry_sound from '../../assets/audio/cry.mp3';
import dance_sound from '../../assets/audio/dance.mp3';
import dive_sound from '../../assets/audio/dive.mp3';
import draw_sound from '../../assets/audio/draw.mp3';
import fish_sound from '../../assets/audio/fish.mp3';
import fly_sound from '../../assets/audio/fly.mp3';
import hug_sound from '../../assets/audio/hug.mp3';
import jump_sound from '../../assets/audio/jump.mp3';
import { SwitchProp } from "./MainPage";

export const imgPath = [cry, dance, dive, draw, fish, fly, hug, jump]
export const audioPath = [cry_sound, dance_sound, dive_sound, draw_sound, fish_sound, fly_sound, hug_sound, jump_sound]
export const wordList = ['cry', 'dance', 'dive', 'draw', 'fish', 'fly', 'hug', 'jump']

export default function ActionsSetA ({ value }: SwitchProp): JSX.Element {
 const arrCards:JSX.Element =  cards[1].map((card: string, i: number) => {
    const wordText: string = cards[1][i].word;    
    const translationText: string = cards[1][i].translation; 
    return <Card key={i} isOn={value} word={wordText} translation={translationText} image={imgPath[i]} audioSrc={audioPath[i]} />
  })
  return arrCards
}