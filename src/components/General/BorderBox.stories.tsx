import type { Meta, StoryObj } from '@storybook/react'

import BorderBox from './BorderBox'

const meta = {
  title: 'General/BorderBox',
  component: BorderBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BorderBox>

export default meta
type Story = StoryObj<typeof meta>

export const WithData: Story = {
  args: {
    children: 'BorderBox',
  },
}

export const WithoutData: Story = {
  args: {
    children: '',
  },
}
