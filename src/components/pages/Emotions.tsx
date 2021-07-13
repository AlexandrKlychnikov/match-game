import cards from "../Cards"
import Card from "../Card";
import sad from '../../assets/img/sad.jpg';
import angry from '../../assets/img/angry.jpg';
import happy from '../../assets/img/happy.jpg';
import tired from '../../assets/img/tired.jpg';
import surprised from '../../assets/img/surprised.jpg';
import scared from '../../assets/img/scared.jpg';
import smile from '../../assets/img/smile.jpg';
import laugh from '../../assets/img/laugh.jpg';
import sad_sound from '../../assets/audio/sad.mp3';
import angry_sound from '../../assets/audio/angry.mp3';
import happy_sound from '../../assets/audio/happy.mp3';
import tired_sound from '../../assets/audio/tired.mp3';
import surprised_sound from '../../assets/audio/surprised.mp3';
import scared_sound from '../../assets/audio/scared.mp3';
import smile_sound from '../../assets/audio/smile.mp3';
import laugh_sound from '../../assets/audio/laugh.mp3';
import { SwitchProp } from "./MainPage";

export const imgPath = [sad, angry, happy, tired, surprised, scared, smile, laugh];
export const audioPath = [sad_sound, angry_sound, happy_sound, tired_sound, surprised_sound, scared_sound, smile_sound, laugh_sound];
export const wordList = ['sad', 'angry', 'happy', 'tired', 'surprised', 'scared', 'smile', 'laugh'];


export default function Emotions ({ value }: SwitchProp): JSX.Element {
 const arrCards:JSX.Element =  cards[6].map((card: string, i: number) => {
    const wordText: string = cards[6][i].word;    
    const translationText: string = cards[6][i].translation;    
    return <Card isOn={value} word={wordText} translation={translationText} image={imgPath[i]} audioSrc={audioPath[i]}/>
  })
  return arrCards  
}