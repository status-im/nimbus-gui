import type { Meta, StoryObj } from '@storybook/react'

import KeyFiles from './KeyFiles'

const meta = {
  title: 'ValidatorOnboarding/KeyFiles',
  component: KeyFiles,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof KeyFiles>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {},
}
