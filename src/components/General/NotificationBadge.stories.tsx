import type { Meta, StoryObj } from '@storybook/react'

import NotificationBadge from './NotificationBadge'

const meta = {
  title: 'General/NotificationBadge',
  component: NotificationBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NotificationBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
