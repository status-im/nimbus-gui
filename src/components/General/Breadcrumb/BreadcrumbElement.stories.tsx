import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import BreadcrumbElement from './BreadcrumbElement'

const meta = {
  title: 'General/BreadcrumbElement',
  component: BreadcrumbElement,
  parameters: {
    layout: 'top',
  },
  decorators: [withRouter()],
  tags: ['autodocs'],
} satisfies Meta<typeof BreadcrumbElement>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    breadcrumb: 'Nodes',
    match: { pathname: '/nodes' },
    isLastElement: false,
  },
}

export const LastElement: Story = {
  args: {
    breadcrumb: 'Nodes',
    match: { pathname: '/nodes' },
    isLastElement: true,
  },
}
