import type { Meta, StoryObj } from '@storybook/react'

import ActiveValidators from './ActiveValidators'

const meta = {
  title: 'Dashboard/ActiveValidators',
  component: ActiveValidators,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ActiveValidators>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { count: 6 },
}
