import type { Meta, StoryObj } from '@storybook/react'

import SyncCardContent from './SyncCardContent'

const meta = {
  title: 'Dashboard/SyncCardContent',
  component: SyncCardContent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SyncCardContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
