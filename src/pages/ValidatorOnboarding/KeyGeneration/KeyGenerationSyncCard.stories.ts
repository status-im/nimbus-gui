import type { Meta, StoryObj } from '@storybook/react'

import KeyGenerationSyncCard from './KeyGenerationSyncCard'

const meta = {
  title: 'ValidatorOnboarding/KeyGenerationSyncCard',
  component: KeyGenerationSyncCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof KeyGenerationSyncCard>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {
    synced: 123.524,
    total: 172.503,
    title: 'Execution Sync Status',
  },
}
