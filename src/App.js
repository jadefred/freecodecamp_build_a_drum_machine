import React, { useState } from "react";

//Components
import Drumpads from "./components/Drumpads";
import Controller from "./components/Controller";

function App() {
  const [keyDisplay, setKeyDisplay] = useState(" ");
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(50);

  return (
    <>
      <div id="drum-machine">
        <div className="drumpads-container">
          <Drumpads setKeyDisplay={setKeyDisplay} power={power} volume={volume} />
        </div>
        <div id="display">
          <Controller powerSetting={{ power, setPower }} keyDisplay={{ keyDisplay, setKeyDisplay }} volume={{ volume, setVolume }} />
        </div>
      </div>
    </>
  );
}

export default App;
