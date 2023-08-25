import type { Meta, StoryObj } from '@storybook/react'

import ValidatorBoxWrapper from './ValidatorBoxWrapper'

const meta = {
  title: 'ValidatorOnboarding/ValidatorBoxWrapper',
  component: ValidatorBoxWrapper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ValidatorBoxWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {
    children: 'ValidatorBoxWrapper',
  },
}
