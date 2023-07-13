import { TamaguiProvider } from "tamagui";
import config from "./tamagui.config.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DeviceHealthCheck from "./pages/DeviceHealthCheck/index.jsx";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DeviceHealthCheck />,
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
