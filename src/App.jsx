import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { BootScreen, Desktop } from "./components";

const App = () => {
  const [booted, setBooted] = useState(false);

  return (
    <BrowserRouter>
      {!booted && <BootScreen onFinish={() => setBooted(true)} />}
      {booted && <Desktop />}
    </BrowserRouter>
  );
};

export default App;
