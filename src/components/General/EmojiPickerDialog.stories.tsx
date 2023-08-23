import type { Meta, StoryObj } from '@storybook/react'
import EmojiPickerDialog from './EmojiPickerDialog'


const meta = {
  title: 'General/EmojiPickerDialog',
  component: EmojiPickerDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EmojiPickerDialog>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultColors: Story = {
  args: {emojiStyle: 'TWITTER'},
}
