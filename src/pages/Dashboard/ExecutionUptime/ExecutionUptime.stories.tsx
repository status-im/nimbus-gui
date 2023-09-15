import type { Meta, StoryObj } from '@storybook/react'

import ExecutionUptime from './ExecutionUptime'

const meta = {
  title: 'Dashboard/ExecutionUptime',
  component: ExecutionUptime,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExecutionUptime>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {},
}
