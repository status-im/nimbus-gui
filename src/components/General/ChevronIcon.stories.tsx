import type { Meta, StoryObj } from '@storybook/react'

import ChevronIcon from './ChevronIcon'

const meta = {
  title: 'General/ChevronIcon',
  component: ChevronIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ChevronIcon>

export default meta
type Story = StoryObj<typeof meta>

export const NotOpened: Story = {
  args: {
    isOpen: false,
  },
}

export const Opened: Story = {
  args: {
    isOpen: true,
  },
}
