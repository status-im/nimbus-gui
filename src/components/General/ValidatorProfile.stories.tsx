import type { Meta, StoryObj } from '@storybook/react'

import ValidatorProfile from './ValidatorProfile'

const meta = {
  title: 'General/ValidatorProfile',
  component: ValidatorProfile,
  tags: ['autodocs'],
} satisfies Meta<typeof ValidatorProfile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    number: 1,
    address: 'zQ3asdf9d4Gs0',
  },
}
