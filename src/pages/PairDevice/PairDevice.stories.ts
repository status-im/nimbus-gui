import type { Meta, StoryObj } from '@storybook/react'

import PairDevice from './PairDevice'

const meta = {
  title: 'Pages/PairDevice',
  component: PairDevice,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof PairDevice>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {},
}
