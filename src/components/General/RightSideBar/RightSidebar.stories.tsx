import type { Meta, StoryObj } from '@storybook/react'

import RightSidebar from './RightSidebar'

const meta = {
  title: 'General/RightSidebar',
  component: RightSidebar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RightSidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
