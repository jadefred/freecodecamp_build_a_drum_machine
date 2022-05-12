import React, { useState } from "react";

//Components
import Drumpads from "./components/Drumpads";
import Controller from "./components/Controller";

function App() {
  const [keyDisplay, setKeyDisplay] = useState(" ");
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(50);
  const [bank, setBank] = useState("Bank 1");

  return (
    <>
      <h1>Drum Machine</h1>
      <div id="drum-machine">
        <div className="drumpads-container">
          <Drumpads setKeyDisplay={setKeyDisplay} power={power} volume={volume} bank={bank} />
        </div>
        <div id="display">
          <Controller
            powerSetting={{ power, setPower }}
            keyDisplay={{ keyDisplay, setKeyDisplay }}
            volume={{ volume, setVolume }}
            bankSetting={{ bank, setBank }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
