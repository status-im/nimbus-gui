import type { Meta, StoryObj } from '@storybook/react'

import KeystoreBackupsCard from './KeystoreBackupsCard'

const meta = {
  title: 'ValidatorOnboarding/KeystoreBackupsCard',
  component: KeystoreBackupsCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof KeystoreBackupsCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Selected: Story = {
  args: {
    isSelected: true,
  },
}
