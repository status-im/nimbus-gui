import type { Meta, StoryObj } from '@storybook/react'

import NodesList from './NodesList'

const meta = {
  title: 'General/NodesList',
  component: NodesList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NodesList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
