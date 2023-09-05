import React from 'react'
import type { Preview } from '@storybook/react'
import { TamaguiProvider } from '@tamagui/web'
import { Provider as StatusProvider } from '@status-im/components'
import { Provider as ReduxProvider } from 'react-redux'

import appConfig from '../tamagui.config'
import store from '../src/redux/store'
import '../src/index.css'

const preview: Preview = {
  decorators: [
    Story => (
      <TamaguiProvider config={appConfig}>
        <StatusProvider>
          <ReduxProvider store={store}>
            <Story />
          </ReduxProvider>
        </StatusProvider>
      </TamaguiProvider>
    ),
  ],
}

export default preview
