import type { Meta, StoryObj } from '@storybook/react'

import SyncCardContent from './SyncCardContent'

const meta = {
  title: 'Dashboard/SyncCardContent',
  component: SyncCardContent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SyncCardContent>

export default meta
type Story = StoryObj<typeof meta>

export const ExecutionClient: Story = {
  args: { title: 'Execution Client', value: 123.424, total: 170, isTop: true },
}

export const ConsensusClient: Story = {
  args: { title: 'Consensus Client', value: 123.424, total: 170, isTop: false },
}

export const WithoutTitle: Story = {
  args: { title: '', value: 123.424, total: 170 },
}

export const WithZeroValue: Story = {
  args: { title: 'Consensus Client', value: 0, total: 170 },
}

export const WithZeroTotal: Story = {
  args: { title: 'Consensus Client', value: 123.424, total: 0 },
}

export const WithZeroValueAndTotal: Story = {
  args: { title: 'Consensus Client', value: 0, total: 0 },
}

export const WithoutValues: Story = {
  args: { title: '', value: 0, total: 0 },
}

export const WithTopBorders: Story = {
  args: { title: '', value: 0, total: 0, isTop: true },
}

export const WithBottomBorders: Story = {
  args: { title: '', value: 0, total: 0, isTop: false },
}
