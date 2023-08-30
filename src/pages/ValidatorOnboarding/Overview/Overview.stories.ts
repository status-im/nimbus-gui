import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import Overview from './Overview'

const meta = {
  title: 'ValidatorOnboarding/Overview',
  component: Overview,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [withRouter],
} satisfies Meta<typeof Overview>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
