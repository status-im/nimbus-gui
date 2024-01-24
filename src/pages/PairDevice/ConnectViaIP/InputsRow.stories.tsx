import type { Meta, StoryObj } from '@storybook/react'

import InputsRow from './InputsRow'
import { DEFAULT_ADDRESS, NODE } from '../../../constants'

const meta = {
  title: 'Pair Device/InputsRow',
  component: InputsRow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputsRow>

export default meta
type Story = StoryObj<typeof meta>

export const Node: Story = {
  args: {
    addressType: NODE,
    address: DEFAULT_ADDRESS,
    port: '',
    portType: '',
  },
}
