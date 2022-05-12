import React, { useState } from "react";

function Controller(props) {
  const [onOff, setOnOff] = useState("On");

  function powerControl() {
    if (props.powerSetting.power) {
      props.powerSetting.setPower(false);
      props.keyDisplay.setKeyDisplay(" ");
      setOnOff("Off");
    } else {
      props.powerSetting.setPower(true);
      setOnOff("On");
    }
  }

  function handleVolumn(e) {
    props.volume.setVolume(e.target.value);
  }

  function handleBank() {
    if (props.bankSetting.bank === "Bank 1") {
      props.bankSetting.setBank("Bank 2");
    } else {
      props.bankSetting.setBank("Bank 1");
    }
  }

  return (
    <>
      <button
        className="power-btn"
        onClick={powerControl}
        style={onOff === "On" ? {} : { color: "#9c4141", backgroundColor: "#f5c4c4" }}
      >
        {onOff}
      </button>

      <div className="audio-name">
        <p>{props.keyDisplay.keyDisplay}</p>
      </div>

      <div className="volume-box">
        <label htmlFor="myRange">Volume : </label>
        <input
          onChange={handleVolumn}
          type="range"
          min="1"
          max="100"
          value={props.volume.volume}
          className="slider"
          id="myRange"
        />
      </div>

      <div className="audio-bank-box">
        <p>Click to change audio bank :</p>
        <button onClick={handleBank}>{props.bankSetting.bank}</button>
      </div>
    </>
  );
}

export default Controller;
