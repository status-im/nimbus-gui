import type { Meta, StoryObj } from '@storybook/react'

import MarkdownText from './MarkdownText'

const meta = {
  title: 'General/MarkdownText',
  component: MarkdownText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MarkdownText>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'MarkdownText',
  },
}
