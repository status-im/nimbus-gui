import type { Meta, StoryObj } from '@storybook/react'

import LeftSidebar from './LeftSidebar'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'General/LeftSidebar',
  component: LeftSidebar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof LeftSidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
