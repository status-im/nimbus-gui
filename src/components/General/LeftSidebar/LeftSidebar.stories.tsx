import type { Meta, StoryObj } from '@storybook/react'

import LeftSidebar from './LeftSidebar'

const meta = {
  title: 'General/LeftSidebar',
  component: LeftSidebar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LeftSidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
