import type { Meta, StoryObj } from '@storybook/react'

import ValidatorsTabs from './ValidatorsTabs'

const meta = {
  title: 'General/ValidatorsTabs',
  component: ValidatorsTabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ValidatorsTabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
