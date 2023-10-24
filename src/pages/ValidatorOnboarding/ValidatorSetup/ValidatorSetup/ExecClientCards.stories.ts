import type { Meta, StoryObj } from '@storybook/react'

import ExecClientCards from './ExecClientCards'

const meta = {
  title: 'ValidatorOnboarding/ExecClientCards',
  component: ExecClientCards,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExecClientCards>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
