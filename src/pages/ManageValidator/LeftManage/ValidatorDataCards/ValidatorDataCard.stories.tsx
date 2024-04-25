import type { Meta, StoryObj } from '@storybook/react'

import ValidatorDataCard from './ValidatorDataCard'

const meta = {
  title: 'ManageValidator/ValidatorDataCard',
  component: ValidatorDataCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ValidatorDataCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Slots Behind',
    value: 19,
    iconPath: 'ghost.png',
  },
}

export const Blocks: Story = {
  args: {
    title: 'Blocks',
    value: 1452,
    iconPath: 'rubiks-cube.png',
    isFractionResult: true,
    fractionValue: 987,
  },
}

export const Attestations: Story = {
  args: {
    title: 'Attestations',
    value: 2199,
    iconPath: 'pacman.png',
    fractionValue: 1023,
    isFractionResult: true,
  },
}

export const Syncs: Story = {
  args: {
    title: 'Syncs',
    value: 1,
    iconPath: 'toaster.png',
  },
}
