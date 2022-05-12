import React, { useState } from "react";

//Components
import Drumpads from "./components/Drumpads";

function App() {
  const [keyDisplay, setKeyDisplay] = useState(" ");

  return (
    <>
      <div id="drum-machine">
        <div className="drumpads-container">
          <Drumpads setKeyDisplay={setKeyDisplay} />
        </div>
        <div id="display">{keyDisplay}</div>
      </div>
    </>
  );
}

export default App;
