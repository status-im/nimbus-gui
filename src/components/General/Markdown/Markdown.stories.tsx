import type { Meta, StoryObj } from '@storybook/react'

import Markdown from './Markdown'

const meta = {
  title: 'General/Markdown',
  component: Markdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Markdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Markdown',
  },
}
