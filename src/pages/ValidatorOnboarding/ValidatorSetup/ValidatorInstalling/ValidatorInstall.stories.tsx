import type { Meta, StoryObj } from '@storybook/react'

import ValidatorSetupInstall from './ValidatorInstall'

const meta = {
  title: 'ValidatorOnboarding/ValidatorSetupInstall',
  component: ValidatorSetupInstall,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [StoryObj => <StoryObj />],
} satisfies Meta<typeof ValidatorSetupInstall>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
