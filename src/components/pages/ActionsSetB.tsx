import cards from "../Cards"
import Card from "../Card";
import open from '../../assets/img/open.jpg';
import play from '../../assets/img/play.jpg';
import point from '../../assets/img/point.jpg';
import ride from '../../assets/img/ride.jpg';
import run from '../../assets/img/run.jpg';
import sing from '../../assets/img/sing.jpg';
import skip from '../../assets/img/skip.jpg';
import swim from '../../assets/img/swim.jpg';
import open_sound from '../../assets/audio/open.mp3';
import play_sound from '../../assets/audio/play.mp3';
import point_sound from '../../assets/audio/point.mp3';
import ride_sound from '../../assets/audio/ride.mp3';
import run_sound from '../../assets/audio/run.mp3';
import sing_sound from '../../assets/audio/sing.mp3';
import skip_sound from '../../assets/audio/skip.mp3';
import swim_sound from '../../assets/audio/swim.mp3';
import { SwitchProp } from "./MainPage";

export const imgPath = [open, play, point, ride, run, sing, skip, swim];
export const audioPath = [open_sound, play_sound, point_sound, ride_sound, run_sound, sing_sound, skip_sound, swim_sound];
export const wordList = ['open', 'play', 'point', 'ride', 'run', 'sing', 'skip', 'swim'];


export default function ActionsSetB ({ value }: SwitchProp): JSX.Element {
 const arrCards:JSX.Element =  cards[2].map((card: string, i: number) => {
    const wordText: string = cards[2][i].word;    
    const translationText: string = cards[2][i].translation;    
    return <Card key={i} isOn={value} word={wordText} translation={translationText} image={imgPath[i]} audioSrc={audioPath[i]} />
  })
  return arrCards  
}