import type { Meta, StoryObj } from '@storybook/react'

import DropdownFilter from './DropdownFilter'

const meta = {
  title: 'ValidatorManagement/DropdownFilter',
  component: DropdownFilter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownFilter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
