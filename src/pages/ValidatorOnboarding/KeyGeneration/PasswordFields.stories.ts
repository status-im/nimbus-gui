import type { Meta, StoryObj } from '@storybook/react'

import PasswordFields from './PasswordFields'

const meta = {
  title: 'ValidatorOnboarding/PasswordFields',
  component: PasswordFields,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof PasswordFields>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {},
}
