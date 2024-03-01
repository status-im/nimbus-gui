import type { Meta, StoryObj } from '@storybook/react'

import CurrencyDropdown from './CurrencyDropdown'

const meta = {
  title: 'General/CurrencyDropdown',
  component: CurrencyDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CurrencyDropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    price: 1,
  },
}
