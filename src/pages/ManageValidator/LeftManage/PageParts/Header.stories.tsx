import type { Meta, StoryObj } from '@storybook/react'

import Header from './Header'

const meta = {
  title: 'Manage Validator/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ width: '600px', margin: 'auto' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
