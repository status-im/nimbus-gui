import type { Meta, StoryObj } from '@storybook/react'

import Dashboard from './Dashboard'

const meta = {
  title: 'Pages/Dashboard',
  component: Dashboard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dashboard>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {},
}
