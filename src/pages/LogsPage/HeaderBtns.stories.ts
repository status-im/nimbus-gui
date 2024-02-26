import type { Meta, StoryObj } from '@storybook/react'

import HeaderBtns from './HeaderBtns'

const meta = {
  title: 'LogsPage/HeaderButtons',
  component: HeaderBtns,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeaderBtns>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    dropdownMenuItem: 'NOTICE',
    indexesVisible: true,
    searchInput: '',
    timestamps: true,
  },
}
