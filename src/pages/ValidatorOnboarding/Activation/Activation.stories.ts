import type { Meta, StoryObj } from '@storybook/react'

import Activation from './Activation'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'ValidatorOnboarding/Activation',
  component: Activation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [withRouter()],
} satisfies Meta<typeof Activation>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {},
}
