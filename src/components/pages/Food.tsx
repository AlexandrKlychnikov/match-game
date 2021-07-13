import cards from "../Cards"
import Card from "../Card";
import chips from '../../assets/img/chips.jpg';
import jam from '../../assets/img/jam.jpg';
import cereal from '../../assets/img/cereal.jpg';
import salad from '../../assets/img/salad.jpg';
import rice from '../../assets/img/rice.jpg';
import porridge from '../../assets/img/porridge.jpg';
import soup from '../../assets/img/soup.jpg';
import sandwich from '../../assets/img/sandwich.jpg';
import chips_sound from '../../assets/audio/chips.mp3';
import jam_sound from '../../assets/audio/jam.mp3';
import cereal_sound from '../../assets/audio/cereal.mp3';
import salad_sound from '../../assets/audio/salad.mp3';
import rice_sound from '../../assets/audio/rice.mp3';
import porridge_sound from '../../assets/audio/porridge.mp3';
import soup_sound from '../../assets/audio/soup.mp3';
import sandwich_sound from '../../assets/audio/sandwich.mp3';
import { SwitchProp } from "./MainPage";

export const imgPath = [chips, jam, cereal, salad, rice, porridge, soup, sandwich];
export const audioPath = [chips_sound, jam_sound, cereal_sound, salad_sound, rice_sound, porridge_sound, soup_sound, sandwich_sound];
export const wordList = ['chips', 'jam', 'cereal', 'salad', 'rice', 'porridge', 'soup', 'sandwich'];


export default function Emotions ({ value }: SwitchProp): JSX.Element {
 const arrCards:JSX.Element =  cards[7].map((card: string, i: number) => {
    const wordText: string = cards[7][i].word;    
    const translationText: string = cards[7][i].translation;    
    return <Card isOn={value} word={wordText} translation={translationText} image={imgPath[i]} audioSrc={audioPath[i]}/>
  })
  return arrCards  
}