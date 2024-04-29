import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import Breadcrumb from './Breadcrumb'

const meta = {
  title: 'General/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'top',
  },
  decorators: [withRouter()],
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumb>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    breadcrumbList: ['Nodes', 'Nimbus', 'Connect Device'],
  },
}
