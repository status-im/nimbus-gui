import type { Meta, StoryObj } from '@storybook/react'

import ValidatorBalance from './ValidatorBalance'

const meta = {
  title: 'ManageValidator/ValidatorBalance',
  component: ValidatorBalance,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ValidatorBalance>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
