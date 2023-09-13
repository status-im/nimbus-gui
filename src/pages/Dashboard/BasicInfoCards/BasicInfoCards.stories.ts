import type { Meta, StoryObj } from '@storybook/react'

import BasicInfoCards from './BasicInfoCards'

const meta = {
  title: 'Dashboard/BasicInfoCards',
  component: BasicInfoCards,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BasicInfoCards>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
