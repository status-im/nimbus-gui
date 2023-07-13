import { TamaguiProvider } from "tamagui";

import config from "./tamagui.config.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}>
      <TamaguiProvider config={config} />
    </RouterProvider>
  );
};

export default App;
