import type { Meta, StoryObj } from '@storybook/react'

import KeystoreFiles from './KeystoreFiles'

const meta = {
  title: 'ValidatorOnboarding/KeystoreFiles',
  component: KeystoreFiles,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof KeystoreFiles>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {},
}
