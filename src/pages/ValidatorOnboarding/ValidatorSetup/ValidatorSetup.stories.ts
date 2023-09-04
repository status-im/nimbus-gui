import type { Meta, StoryObj } from '@storybook/react'
import { Provider as ReduxProvider } from 'react-redux'
import { withRouter } from 'storybook-addon-react-router-v6'
import React from 'react'
import ValidatorSetup from './ValidatorSetup'
import store from '../../../redux/store'

const withRedux = (StoryComponent: any) => {
  return (
    <ReduxProvider store={store} >
      <StoryComponent />
    </ReduxProvider>
  );
}

const meta = {
  title: 'ValidatorOnboarding/ValidatorSetup',
  component: ValidatorSetup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter(), withRedux],
} satisfies Meta<typeof ValidatorSetup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
