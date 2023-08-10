import type { Meta, StoryObj } from '@storybook/react'

import HealthInfoSection from './HealthInfoSection'

const meta = {
  title: 'Device Health/HealthInfoSection',
  component: HealthInfoSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HealthInfoSection>

export default meta
type Story = StoryObj<typeof meta>

export const AllGoodStats: Story = {
  args: {
    usedStorage: 79 * 1024 * 1024 * 1024,
    maxStorage: 100 * 1024 * 1024 * 1024,
    usedRamMemory: 32 * 1024 * 1024 * 1024,
    maxRamMemory: 64 * 1024 * 1024 * 1024,
    cpuClockRate: 2.4,
    networkLatency: 50,
  },
}

export const StorageBad: Story = {
  args: {
    usedStorage: 80 * 1024 * 1024 * 1024,
    maxStorage: 100 * 1024 * 1024 * 1024,
    usedRamMemory: 32 * 1024 * 1024 * 1024,
    maxRamMemory: 64 * 1024 * 1024 * 1024,
    cpuClockRate: 2.5,
    networkLatency: 50,
  },
}

export const CpuBad: Story = {
  args: {
    usedStorage: 79 * 1024 * 1024 * 1024,
    maxStorage: 100 * 1024 * 1024 * 1024,
    usedRamMemory: 32 * 1024 * 1024 * 1024,
    maxRamMemory: 64 * 1024 * 1024 * 1024,
    cpuClockRate: 2.3,
    networkLatency: 50,
  },
}

export const RamBad: Story = {
  args: {
    usedStorage: 79 * 1024 * 1024 * 1024,
    maxStorage: 100 * 1024 * 1024 * 1024,
    usedRamMemory: 56 * 1024 * 1024 * 1024,
    maxRamMemory: 64 * 1024 * 1024 * 1024,
    cpuClockRate: 2.4,
    networkLatency: 50,
  },
}

export const LatencyBad: Story = {
  args: {
    usedStorage: 79 * 1024 * 1024 * 1024,
    maxStorage: 100 * 1024 * 1024 * 1024,
    usedRamMemory: 32 * 1024 * 1024 * 1024,
    maxRamMemory: 64 * 1024 * 1024 * 1024,
    cpuClockRate: 2.4,
    networkLatency: 101,
  },
}
