import type { Meta, StoryObj } from '@storybook/react'

import ManagementCard from './ManagementCard'

const meta = {
  title: 'ValidatorManagement/ManagementCard',
  component: ManagementCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ManagementCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
