import React, { Component } from "react";
import "./card.css";
import SvgRotate from "./SvgRotate"

interface Props {
  word: string;
  image: string;
}

class Card extends Component <Props> {
  constructor(props: Props, word: string, image: string) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <img src={this.props.image} alt="" width="318px" />
        <span className="word">{this.props.word}</span>
        <SvgRotate />
      </div>
    );
  }
}

export default Card;