import type { Meta, StoryObj } from '@storybook/react'

import BreadcrumbElement from './BreadcrumbElement'

const meta = {
  title: 'General/BreadcrumbElement',
  component: BreadcrumbElement,
  parameters: {
    layout: 'top',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BreadcrumbElement>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    element: 'Nodes',
    isLastElement: false,
  },
}

export const LastElement: Story = {
  args: {
    element: 'Nodes',
    isLastElement: true,
  },
}
