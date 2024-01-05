import type { Meta, StoryObj } from '@storybook/react'

import CreateLocalNodePage from './CreateLocalNodePage'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'Pages/CreateLocalNode',
  component: CreateLocalNodePage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof CreateLocalNodePage>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {},
}
