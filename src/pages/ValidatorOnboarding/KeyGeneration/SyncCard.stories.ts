import type { Meta, StoryObj } from '@storybook/react'

import SyncCard from './SyncCard'

const meta = {
  title: 'ValidatorOnboarding/SyncCard',
  component: SyncCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SyncCard>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {
    synced: 123.524,
    total: 172.503,
    title: 'Execution Sync Status',
  },
}
