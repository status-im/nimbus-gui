import type { Meta, StoryObj } from '@storybook/react'

import ValidatorSetup from './ValidatorSetup'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'ValidatorOnboarding/ValidatorSetup',
  component: ValidatorSetup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [withRouter()],
} satisfies Meta<typeof ValidatorSetup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
