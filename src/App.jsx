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
    <TamaguiProvider config={config}>
      <RouterProvider router={router} />
    </TamaguiProvider>
  );
};

export default App;
