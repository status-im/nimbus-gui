import type { Meta, StoryObj } from '@storybook/react'

import BreadcrumbBar from './BreadcrumbBar'

const meta = {
  title: 'General/BreadcrumbBar',
  component: BreadcrumbBar,
  parameters: {
    layout: 'top',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BreadcrumbBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    breadcrumbList: ['Nodes', 'Nimbus', 'Connect Device'],
  },
}
