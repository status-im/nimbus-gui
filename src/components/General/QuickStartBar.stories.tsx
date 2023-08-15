import type { Meta, StoryObj } from '@storybook/react'

import QuickStartBar from './QuickStartBar'

const meta = {
  title: 'General/QuickStartBar',
  component: QuickStartBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof QuickStartBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
