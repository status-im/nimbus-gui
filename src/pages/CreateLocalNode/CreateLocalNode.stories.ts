import type { Meta, StoryObj } from '@storybook/react'

import CreateLocalNode from './CreateLocalNode'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'Pages/CreateLocalNode',
  component: CreateLocalNode,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof CreateLocalNode>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {},
}
