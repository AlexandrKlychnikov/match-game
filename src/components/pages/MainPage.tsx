import cards from "../Cards"
import Category from "../Category";

export interface SwitchProp {
    value: boolean;
}
  
export default function MainPage({ value }: SwitchProp): JSX.Element {
 const categories =  cards[0].map((card: string, i: number) => {
    return <Category key={i} category={card} image={i} isOn={value} />
  })
  return categories  
}