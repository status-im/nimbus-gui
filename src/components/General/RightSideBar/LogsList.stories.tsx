import type { Meta, StoryObj } from '@storybook/react'

import LogsList from './LogsList'

const meta = {
  title: 'General/LogsList',
  component: LogsList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LogsList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
