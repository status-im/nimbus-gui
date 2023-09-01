import type { Meta, StoryObj } from '@storybook/react'
import { Provider as ReduxProvider } from 'react-redux'

import ValidatorSetupInstall from './ValidatorInstall'
import store from '../../../redux/store'

const meta = {
  title: 'ValidatorOnboarding/ValidatorSetupInstall',
  component: ValidatorSetupInstall,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    StoryObj => (
      <ReduxProvider store={store}>
        <StoryObj />
      </ReduxProvider>
    ),
  ],
} satisfies Meta<typeof ValidatorSetupInstall>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
