import type { Meta, StoryObj } from '@storybook/react'

import Header from './Header'

const meta = {
  title: 'General/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    selectedTag: 'pair',
  },
}

export const CreateTag: Story = {
  args: {
    selectedTag: 'create',
  },
}

export const ConnectTag: Story = {
  args: {
    selectedTag: 'connect',
  },
}
