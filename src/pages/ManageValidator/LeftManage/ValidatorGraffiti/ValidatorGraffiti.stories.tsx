import type { Meta, StoryObj } from '@storybook/react'

import ValidatorGraffiti from './ValidatorGraffiti'

const meta = {
  title: 'Manage Validator/ValidatorGraffiti',
  component: ValidatorGraffiti,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ValidatorGraffiti>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
