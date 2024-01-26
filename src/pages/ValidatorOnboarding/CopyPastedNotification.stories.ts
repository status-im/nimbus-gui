import type { Meta, StoryObj } from '@storybook/react'

import CopyPastedNotification from './CopyPastedNotification'

const meta = {
  title: 'ValidatorOnboarding/CopyPastedNotification',
  component: CopyPastedNotification,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CopyPastedNotification>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const SmallScreen: Story = {
  args: {
    isSmallScreen: true,
  },
}
