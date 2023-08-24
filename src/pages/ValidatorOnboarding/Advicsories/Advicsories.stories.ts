import type { Meta, StoryObj } from '@storybook/react'

import Advicsories from './Advicsories'

const meta = {
  title: 'ValidatorOnboarding/Advicsories',
  component: Advicsories,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Advicsories>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {},
}
