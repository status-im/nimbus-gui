import type { Meta, StoryObj } from '@storybook/react'

import OsCard from './OsCard'

const meta = {
  title: 'ValidatorOnboarding/OsCard',
  component: OsCard,
  tags: ['autodocs'],
} satisfies Meta<typeof OsCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    icon: '/icons/MAC.svg',
    name: 'Mac',
    isSelected: true,
  },
}
