import type { Meta, StoryObj } from '@storybook/react'

import ValidatorNameAddress from './ValidatorNameAddress'

const meta = {
  title: 'General/ValidatorNameAddress',
  component: ValidatorNameAddress,
  tags: ['autodocs'],
} satisfies Meta<typeof ValidatorNameAddress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    number: 1,
    address: 'zQ3asdf9d4Gs0',
  },
}
