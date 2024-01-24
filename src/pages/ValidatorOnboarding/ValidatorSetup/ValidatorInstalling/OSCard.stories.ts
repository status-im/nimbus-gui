import type { Meta, StoryObj } from '@storybook/react'

import OSCard from './OSCard'
import { LINUX, MAC, WINDOWS } from '../../../../constants'

const meta = {
  title: 'ValidatorOnboarding/OSCard',
  component: OSCard,
  tags: ['autodocs'],
} satisfies Meta<typeof OSCard>

export default meta
type Story = StoryObj<typeof meta>

export const MacOS: Story = {
  args: {
    icon: '/icons/apple-logo.svg',
    name: MAC,
  },
}

export const Linux: Story = {
  args: {
    icon: '/icons/linux-logo.svg',
    name: LINUX,
  },
}

export const Windows: Story = {
  args: {
    icon: '/icons/windows-logo.svg',
    name: WINDOWS,
  },
}

export const NotSelectedMacOS = {
  args: {
    icon: '/icons/apple-logo.svg',
    name: MAC,
  },
}
