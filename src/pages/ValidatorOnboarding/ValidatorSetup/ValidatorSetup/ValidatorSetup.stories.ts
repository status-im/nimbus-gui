import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import ValidatorSetup from './ValidatorSetup'

const meta = {
  title: 'ValidatorOnboarding/ValidatorSetup',
  component: ValidatorSetup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof ValidatorSetup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
