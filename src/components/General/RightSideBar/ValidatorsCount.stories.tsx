import type { Meta, StoryObj } from '@storybook/react'

import ValidatorsCount from './ValidatorsCount'

const meta = {
  title: 'General/ValidatorsCount',
  component: ValidatorsCount,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ValidatorsCount>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
