import type { Meta, StoryObj } from '@storybook/react'

import LogsPage from './LogsPage'

const meta = {
  title: 'LogsPage/LogsPage',
  component: LogsPage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LogsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
