import type { Meta, StoryObj } from '@storybook/react'

import NodesLogo from './NodesLogo'

const meta = {
  title: 'General/NodesLogo',
  component: NodesLogo,
  tags: ['autodocs'],
} satisfies Meta<typeof NodesLogo>

export default meta
type Story = StoryObj<typeof meta>

export const ExampleNodesLogo: Story = {}
