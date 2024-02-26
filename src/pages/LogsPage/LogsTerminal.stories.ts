import type { Meta, StoryObj } from '@storybook/react'

import LogsTerminal from './LogsTerminal'

const meta = {
  title: 'LogsPage/LogsTerminal',
  component: LogsTerminal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LogsTerminal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    dropdownMenuItem: '',
    highLightSearched: false,
    indexesVisible: true,
    searchInput: '',
    timestamps: true,
    windowWidth: 1200,
  },
}
