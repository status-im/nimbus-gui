import type { Meta, StoryObj } from '@storybook/react'

import Breadcrumb from './Breadcrumb'

const meta = {
  title: 'General/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'top',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumb>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    breadcrumbList: ['Nodes', 'Nimbus', 'Connect Device'],
  },
}
