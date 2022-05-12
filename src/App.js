import React, { useState } from "react";

//Components
import Drumpads from "./components/Drumpads";
import Controller from "./components/Controller";

function App() {
  const [keyDisplay, setKeyDisplay] = useState(" ");
  const [power, setPower] = useState(true);

  return (
    <>
      <div id="drum-machine">
        <div className="drumpads-container">
          <Drumpads setKeyDisplay={setKeyDisplay} power={power}/>
        </div>
        <div id="display">
          {keyDisplay}
          <Controller powerSetting={{ power, setPower }} />
        </div>
      </div>
    </>
  );
}

export default App;
