import React, { Component } from "react";
import "./card.css";
import SvgRotate from "./SvgRotate"


interface Props {
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
  isOn: boolean;
}

function flipCardLeave(event: any) {
  if (event.target.closest('.card').classList.contains('flip')) {
    event.target.closest('.card').classList.remove('flip')
  }
} 

function handleClickAudioPlay(event: any) {
  if (!event.target.closest('.svgbox')) {
    const element: HTMLDivElement = event.target.closest('.back-face');
    element.querySelector('audio')?.play();
  }
}
class Card extends Component <Props, {isGame: boolean, gameArr: string[]}> {
  constructor(props: Props, word: string, image: string, translation: string, audioSrc: string, isOn: boolean) {
    super(props);
    this.state = {
      isGame: false,
      gameArr: [],
    }
  }
  
  handleClickAudioPlay(event: any) {
    if (!this.state.isGame) {
      if (!event.target.closest('.svgbox')) {
        const element: HTMLDivElement = event.target.closest('.back-face');
        element.querySelector('audio')?.play();
      }
    }
  }

  render() {
    if (this.props.isOn) {
      return (
        <div className="card" onMouseLeave={flipCardLeave}>
          <div className="front-face">
            <img src={this.props.image} alt="" width="318px" />
            <span className="word">{this.props.translation}</span>
          </div>
          <div className="back-face" onClick={handleClickAudioPlay}>
            <audio className="audioFile" src={this.props.audioSrc}></audio>
            <img src={this.props.image} alt="" width="318px" />
            <span className="word">{this.props.word}</span>
            <SvgRotate />
          </div>
        </div>
      );
    } else {
      return (
        <div className="card" onMouseLeave={flipCardLeave}>
          <div className="front-face">
            <img src={this.props.image} alt="" width="318px" />
            <span className="word">{this.props.translation}</span>
          </div>
          <div className="back-face game" data-word={this.props.word} style={{background: `center / cover no-repeat url(${this.props.image})`}}>
            <audio className="audioFile" src={this.props.audioSrc}></audio>
          </div>
        </div>
      );
    }
  } 
}

export default Card;
