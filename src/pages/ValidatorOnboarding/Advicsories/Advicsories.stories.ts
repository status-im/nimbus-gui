import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import Advicsories from './Advicsories'

const meta = {
  title: 'ValidatorOnboarding/Advicsories',
  component: Advicsories,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof Advicsories>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
