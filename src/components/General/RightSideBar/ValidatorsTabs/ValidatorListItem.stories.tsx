import type { Meta, StoryObj } from '@storybook/react'

import ValidatorListItem from './ValidatorListItem'

const meta = {
  title: 'General/ValidatorListItem',
  component: ValidatorListItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ValidatorListItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    validatorAddress: 'zQ3asdf9d4Gs0',
    name: '1',
  },
}

export const WithAvatarChip: Story = {
  args: {
    validatorAddress: 'zQ3asdf9d4Gs0',
    name: '1',
    isAvatarChipIncluded: true,
  },
}

export const Verified: Story = {
  args: {
    validatorAddress: 'zQ3asdf9d4Gs0',
    name: '1',
    isVerified: true,
  },
}

export const BothIncluded: Story = {
  args: {
    validatorAddress: 'zQ3asdf9d4Gs0',
    name: '1',
    isVerified: true,
    isAvatarChipIncluded: true,
  },
}

export const WithDifferentName: Story = {
  args: {
    validatorAddress: 'zQ3asdf9d4Gs0',
    name: '2',
  },
}

export const WithDifferentValidatorAddress: Story = {
  args: {
    validatorAddress: 'aW4asdf8t3Hs2',
    name: '1',
  },
}
