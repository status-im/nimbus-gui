import { TamaguiProvider } from 'tamagui'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider as StatusProvider } from '@status-im/components'

import './App.css'
import config from '../tamagui.config'
import LandingPage from './components/LayoutComponent/LandingPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
])

function App() {
  return (
    <TamaguiProvider config={config}>
      <StatusProvider>
        <RouterProvider router={router} />
      </StatusProvider>
    </TamaguiProvider>
  )
}

export default App
