import type { Meta, StoryObj } from '@storybook/react'

import KeystoreFiles from './KeystoreFiles'

const meta = {
  title: 'ValidatorOnboarding/KeystoreFiles',
  component: KeystoreFiles,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof KeystoreFiles>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
