import type { Meta, StoryObj } from '@storybook/react'

import StorageCard from './StorageCard'

const meta = {
    title: 'Dashboard/StorageCard',
    component: StorageCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof StorageCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: { storage: 45, maxStorage: 100 },
}
export const BadStats: Story = {
    args: { storage: 110, maxStorage: 100 }
}