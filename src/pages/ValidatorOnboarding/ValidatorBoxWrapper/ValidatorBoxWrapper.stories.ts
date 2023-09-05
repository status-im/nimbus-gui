import type { Meta, StoryObj } from '@storybook/react'

import ValidatorBoxWrapper from './ValidatorBoxWrapper'

const meta = {
  title: 'ValidatorOnboarding/ValidatorBoxWrapper',
  component: ValidatorBoxWrapper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ValidatorBoxWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'ValidatorBoxWrapper',
  },
}
