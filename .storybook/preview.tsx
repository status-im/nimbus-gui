import React from 'react'
import type { Preview } from '@storybook/react'
import { TamaguiProvider } from '@tamagui/web'
import { Provider as StatusProvider } from '@status-im/components'
import '../src/index.css'
import appConfig from '../tamagui.config'
import { Provider as ReduxProvider } from 'react-redux'
import store from '../src/redux/store'

const preview: Preview = {
  parameters: {
    // layout: 'centered',
  },
  decorators: [
    Story => {
      return (
        <TamaguiProvider config={appConfig}>
          <StatusProvider>
            <ReduxProvider store={store}>
              <Story />
            </ReduxProvider>
          </StatusProvider>
        </TamaguiProvider>
      )
    },
  ],
}

export default preview
