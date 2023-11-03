import type { Meta, StoryObj } from '@storybook/react'

import AlertsList from './AlertsList'

const meta = {
  title: 'General/AlertsList',
  component: AlertsList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AlertsList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
