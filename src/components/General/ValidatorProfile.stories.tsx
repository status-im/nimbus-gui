import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import ValidatorProfile from './ValidatorProfile'

const meta = {
  title: 'General/ValidatorProfile',
  component: ValidatorProfile,
  tags: ['autodocs'],
  decorators: [withRouter()],
} satisfies Meta<typeof ValidatorProfile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: '1',
    address: 'zQ3asdf9d4Gs0',
  },
}
