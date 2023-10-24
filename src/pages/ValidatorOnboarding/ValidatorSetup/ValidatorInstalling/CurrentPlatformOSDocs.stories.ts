import type { Meta, StoryObj } from '@storybook/react'

import CurrentPlatformOSDocs from './CurrentPlatformOSDocs'
import { LINUX, MAC, WINDOWS } from '../../../../constants'

const meta = {
  title: 'ValidatorOnboarding/CurrentPlatformOSDocs',
  component: CurrentPlatformOSDocs,
  tags: ['autodocs'],
} satisfies Meta<typeof CurrentPlatformOSDocs>

export default meta
type Story = StoryObj<typeof meta>

export const MacOs: Story = {
  args: {
    selectedOS: MAC,
  },
}

export const Windows: Story = {
  args: {
    selectedOS: WINDOWS,
  },
}

export const Linux: Story = {
  args: {
    selectedOS: LINUX,
  },
}
