import type { Meta, StoryObj } from '@storybook/react'

import BetaTag from './BetaTag'

const meta = {
  title: 'General/BetaTag',
  component: BetaTag,
  tags: ['autodocs'],
} satisfies Meta<typeof BetaTag>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
