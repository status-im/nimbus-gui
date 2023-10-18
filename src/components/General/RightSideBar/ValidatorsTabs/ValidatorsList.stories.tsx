import type { Meta, StoryObj } from '@storybook/react'

import ValidatorsList from './ValidatorsList'

const meta = {
  title: 'General/ValidatorsList',
  component: ValidatorsList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ValidatorsList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
