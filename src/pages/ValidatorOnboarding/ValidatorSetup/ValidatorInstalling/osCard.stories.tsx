import type { Meta, StoryObj } from '@storybook/react'

import osCard from './OsCard'

const meta = {
    title: 'ValidatorOnboarding/osCard',
    component: osCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof osCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        icon: "/icons/MAC.png",
        name: "Mac",
        isSelected: true
    },
}
