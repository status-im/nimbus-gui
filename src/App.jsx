import { TamaguiProvider } from "tamagui";

import config from "./tamagui.config.js";

import "./App.css";

const App = () => {
  return <TamaguiProvider config={config}></TamaguiProvider>;
};

export default App;
