import type { Meta, StoryObj } from '@storybook/react'

import NimbusLogoMark from './NimbusLogoMark'

const meta = {
  title: 'General/NimbusLogoMark',
  component: NimbusLogoMark,
  tags: ['autodocs'],
} satisfies Meta<typeof NimbusLogoMark>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
