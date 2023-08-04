import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button, TamaguiProvider } from 'tamagui'
import './App.css'
import '@tamagui/react-17-patch'

import config from '../tamagui.config'

function App() {
  const [count, setCount] = useState(0)

  return (
    <TamaguiProvider config={config}>
      <Button size="$6">LEL</Button>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </TamaguiProvider>
  )
}

export default App
