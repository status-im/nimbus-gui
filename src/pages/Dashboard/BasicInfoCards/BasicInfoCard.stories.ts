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
    title: 'Active Validators',
    value: '6',
  },
}

export const WithoutTitle: Story = {
  args: {
    title: '',
    value: '6',
  },
}

export const WithoutValue: Story = {
  args: {
    title: 'Active Validators',
    value: '',
  },
}

export const Empty: Story = {
  args: {
    title: '',
    value: '',
  },
}

export const WithLongData: Story = {
  args: {
    title: 'This is a very long title that is for testing purposes only',
    value: '666666',
  },
}
