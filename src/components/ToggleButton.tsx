import React from "react";
import "./toggle.css";

export interface ISwitch {
  isOn: boolean,
  handleToggle: () => void
  onColor: string,
}

function handleClickToggle() {
  const start = document.getElementById('start');
  start?.classList.toggle('repeat')
  if (start && start?.classList.contains('repeat')) {
    start.innerText = 'REPEAT'
  } else if (start) {
    start.innerText = 'START GAME'
  }  
}

  const ToggleButton = ({ isOn, handleToggle, onColor } : ISwitch) => {
  
    let color: string = '';
    if (isOn && onColor) {
      color = onColor;
    }
    return (
      <div className="switch-container">
        <label style={{ background: color }} className="react-switch">
          <input
            onClick={handleClickToggle}
            checked={isOn}
            onChange={handleToggle}
            className="react-switch-checkbox"
            type="checkbox"
          />
          <div className="react-switch-button" />
          <div className="react-switch-labels">
            <span className="train">TRAIN</span>
            <span>PLAY</span>
          </div>
        </label>
      </div>
    );

  };

export default ToggleButton;