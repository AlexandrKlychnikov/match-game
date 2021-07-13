import cards from "../Cards"
import Card from "../Card";
import skirt from '../../assets/img/skirt.jpg';
import pants from '../../assets/img/pants.jpg';
import blouse from '../../assets/img/blouse.jpg';
import dress from '../../assets/img/dress.jpg';
import boot from '../../assets/img/boot.jpg';
import shirt from '../../assets/img/shirt.jpg';
import coat from '../../assets/img/coat.jpg';
import shoe from '../../assets/img/shoe.jpg';
import skirt_sound from '../../assets/audio/skirt.mp3';
import pants_sound from '../../assets/audio/pants.mp3';
import blouse_sound from '../../assets/audio/blouse.mp3';
import dress_sound from '../../assets/audio/dress.mp3';
import boot_sound from '../../assets/audio/boot.mp3';
import shirt_sound from '../../assets/audio/shirt.mp3';
import coat_sound from '../../assets/audio/coat.mp3';
import shoe_sound from '../../assets/audio/shoe.mp3';
import { SwitchProp } from "./MainPage";

export const imgPath = [skirt, pants, blouse, dress, boot, shirt, coat, shoe];
export const audioPath = [skirt_sound, pants_sound, blouse_sound, dress_sound, boot_sound, shirt_sound, coat_sound, shoe_sound];
export const wordList = ['skirt', 'pants', 'blouse', 'dress', 'boot', 'shirt', 'coat', 'shoe'];

export default function Clothes ({ value }: SwitchProp): JSX.Element {
 const arrCards:JSX.Element =  cards[5].map((card: string, i: number) => {
    const wordText: string = cards[5][i].word;    
    const translationText: string = cards[5][i].translation;    
    return <Card isOn={value} word={wordText} translation={translationText} image={imgPath[i]} audioSrc={audioPath[i]} />
  })
  return arrCards  
}