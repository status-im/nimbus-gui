import type { Meta, StoryObj } from '@storybook/react'

import PairedSuccessfully from './PairedSuccessfully'

const meta = {
  title: 'Pair Device/PairedSuccessfully',
  component: PairedSuccessfully,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PairedSuccessfully>

export default meta
type Story = StoryObj<typeof meta>

export const PairedSuccessfullyExample: Story = {
  args: {},
}
