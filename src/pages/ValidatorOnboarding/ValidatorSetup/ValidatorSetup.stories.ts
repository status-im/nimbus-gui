import type { Meta, StoryObj } from '@storybook/react'

import ValidatorSetup from './ValidatorSetup'

const meta = {
  title: 'ValidatorOnboarding/ValidatorSetup',
  component: ValidatorSetup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ValidatorSetup>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {},
}
