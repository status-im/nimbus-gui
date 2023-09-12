import type { Meta, StoryObj } from '@storybook/react'

import BasicInfoCard from './BasicInfoCard'

const meta = {
  title: 'Dashboard/BasicInfoCard',
  component: BasicInfoCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BasicInfoCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Default',
    value: '10',
  },
}
