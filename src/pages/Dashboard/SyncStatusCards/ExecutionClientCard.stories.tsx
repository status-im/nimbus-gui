import type { Meta, StoryObj } from '@storybook/react'

import ExecutionClientCard from './ExecutionClientCard'

const meta = {
  title: 'Dashboard/ExecutionClientCard',
  component: ExecutionClientCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExecutionClientCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { value: 200000, total: 123562 },
}
