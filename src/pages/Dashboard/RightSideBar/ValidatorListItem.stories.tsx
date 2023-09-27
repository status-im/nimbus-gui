import type { Meta, StoryObj } from '@storybook/react'

import ValidatorListItem from './ValidatorListItem'

const meta = {
    title: 'Dashboard/ValidatorListItem',
    component: ValidatorListItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ValidatorListItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: { avatarKey: '37880sfsef38fsb', name: 'Validator 1', selected: true, isAvatarChipIncluded: true, isVerified: true },
}
