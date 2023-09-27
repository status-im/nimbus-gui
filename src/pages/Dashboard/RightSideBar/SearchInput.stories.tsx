import type { Meta, StoryObj } from '@storybook/react'

import SearchInput from './SearchInput'

const meta = {
  title: 'Dashboard/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
