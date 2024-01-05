import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import InputsRow from './InputsRow'

const meta = {
  title: 'Pair Device/InputsRow',
  component: InputsRow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof InputsRow>

export default meta
type Story = StoryObj<typeof meta>

export const Node: Story = {
  args: {
    addressType: 'Node',
    address: 'http://124.0.0.1',
    port: '',
    portType: '',
  },
}

export const VC: Story = {
  args: {
    addressType: 'Validator Client',
    portType: 'VC',
    address: 'http://124.0.0.1',
    port: '9000',
    isAdvanced: true,
    isSwitchOn: true,
    isChecked: true,
  },
}

export const Beacon: Story = {
  args: {
    addressType: 'Beacon',
    portType: 'Beacon',
    address: 'http://124.0.0.1',
    port: '5052',
    isAdvanced: true,
    isSwitchOn: true,
    isChecked: true,
  },
}
