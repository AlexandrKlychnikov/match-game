import cards from "../Cards"
import Card from "../Card";
import cat from '../../assets/img/cat.jpg';
import chick from '../../assets/img/chick.jpg';
import chicken from '../../assets/img/chicken.jpg';
import dog from '../../assets/img/dog.jpg';
import horse from '../../assets/img/horse.jpg';
import pig from '../../assets/img/pig.jpg';
import rabbit from '../../assets/img/rabbit.jpg';
import sheep from '../../assets/img/sheep.jpg';
import cat_sound from '../../assets/audio/cat.mp3';
import chick_sound from '../../assets/audio/chick.mp3';
import chicken_sound from '../../assets/audio/chicken.mp3';
import dog_sound from '../../assets/audio/dog.mp3';
import horse_sound from '../../assets/audio/horse.mp3';
import pig_sound from '../../assets/audio/pig.mp3';
import rabbit_sound from '../../assets/audio/rabbit.mp3';
import sheep_sound from '../../assets/audio/sheep.mp3';
import { SwitchProp } from "./MainPage";

export const imgPath = [cat, chick, chicken, dog, horse, pig, rabbit, sheep];
export const audioPath = [cat_sound, chick_sound, chicken_sound, dog_sound, horse_sound, pig_sound, rabbit_sound, sheep_sound];
export const wordList = ['cat', 'chick', 'chicken', 'dog', 'horse', 'pig', 'rabbit', 'sheep'];


export default function AnimalsSetA ({ value }: SwitchProp): JSX.Element {
 const arrCards:JSX.Element =  cards[3].map((card: string, i: number) => {
    const wordText: string = cards[3][i].word;
    const translationText: string = cards[3][i].translation;    
    return <Card isOn={value} word={wordText} translation={translationText} image={imgPath[i]} audioSrc={audioPath[i]} />
  })
  return arrCards  
}