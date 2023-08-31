import type { Meta, StoryObj } from '@storybook/react'

import KeyGenerationSyncCard from './KeyGenerationSyncCard'

const meta = {
  title: 'ValidatorOnboarding/KeyGenerationSyncCard',
  component: KeyGenerationSyncCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof KeyGenerationSyncCard>

export default meta
type Story = StoryObj<typeof meta>

export const Blue: Story = {
  args: {
    synced: 123.524,
    total: 172.503,
    title: 'Execution Sync Status',
    color: '#2a4af5',
  },
}

export const Red: Story = {
  args: {
    synced: 123.524,
    total: 172.503,
    title: 'Execution Sync Status',
    color: '#ff6161',
  },
}

export const MaxValue: Story = {
  args: {
    synced: 172.503,
    total: 172.503,
    title: 'Execution Sync Status',
    color: '#2a4af5',
  },
}

export const OverMaxValue: Story = {
  args: {
    synced: 200,
    total: 172.503,
    title: 'Execution Sync Status',
    color: '#2a4af5',
  },
}

export const MinValue: Story = {
  args: {
    synced: 0,
    total: 172.503,
    title: 'Execution Sync Status',
    color: '#2a4af5',
  },
}

export const UnderMinValue: Story = {
  args: {
    synced: -100,
    total: 172.503,
    title: 'Execution Sync Status',
    color: '#2a4af5',
  },
}

export const WithoutTitle: Story = {
  args: {
    synced: 123.524,
    total: 172.503,
    title: '',
    color: '#2a4af5',
  },
}
