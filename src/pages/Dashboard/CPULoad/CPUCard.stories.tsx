import type { Meta, StoryObj } from '@storybook/react'

import CPUCard from './CPUCard'

const meta = {
  title: 'Dashboard/CPUCard',
  component: CPUCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CPUCard>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {load:[32,12,45,10]},
}
