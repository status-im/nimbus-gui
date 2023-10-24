import type { Meta, StoryObj } from '@storybook/react'

import CurrentPlatformOSContent from './CurrentPlatformOSContent'
import { LINUX, MAC, WINDOWS } from '../../../../constants'

const meta = {
  title: 'ValidatorOnboarding/CurrentPlatformOSContent',
  component: CurrentPlatformOSContent,
  tags: ['autodocs'],
} satisfies Meta<typeof CurrentPlatformOSContent>

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
