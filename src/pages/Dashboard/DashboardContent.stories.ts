import type { Meta, StoryObj } from '@storybook/react'

import DashboardContent from './DashboardContent'

const meta = {
  title: 'Dashboard/DashboardContent',
  component: DashboardContent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DashboardContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
