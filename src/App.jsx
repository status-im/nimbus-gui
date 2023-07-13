import { TamaguiProvider } from "tamagui";
import config from "./tamagui.config.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import { DeviceHealthCheck } from "./pages/DeviceHealthCheck/index.jsx";

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
