import React from 'react'
import type { Preview } from '@storybook/react'
import { TamaguiProvider } from '@tamagui/web'
import { Provider as StatusProvider } from '@status-im/components'
import '../src/index.css'
import appConfig from '../tamagui.config'

const preview: Preview = {
  parameters: {
    // layout: 'centered',
  },
  decorators: [
    Story => {
      return (
        <TamaguiProvider config={appConfig}>
          <StatusProvider>
            <Story />
          </StatusProvider>
        </TamaguiProvider>
      )
    },
  ],
}

export default preview
