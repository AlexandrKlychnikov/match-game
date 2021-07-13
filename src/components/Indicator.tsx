import '../components/indicator.css';
import starWin from '../assets/img/star-win.png';
import star from '../assets/img/star.png';

export interface IArr {
  arr: boolean[];
}

export interface IStar {
  succes: boolean;
}


function handleClick() {

}

export const indicatorValue: boolean[] = [];

export default function Indicator(arr: any) {
  //const stars =  arr.arr.map((star: any, i: number) => {
  //  return <Star key= {i} succes={star} />
 // })
    return (
      <div className="indicator break" id="indicator" onClick={handleClick}>
        {/*stars*/}
      </div>
    );
  }

export function Star(succes: IStar) {
  if (succes.succes) {
    return (
      <img src={starWin} alt=""  />
    );
  } else {
    return (
      <img src={star} alt=""  />
    );
  }
}









           
      
