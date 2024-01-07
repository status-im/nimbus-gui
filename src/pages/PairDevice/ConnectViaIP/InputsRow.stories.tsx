import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import InputsRow from './InputsRow'
import {
  BEACON,
  BEACON_PORT,
  DEFAULT_ADDRESS,
  NODE,
  VALIDATOR_CLIENT,
  VC,
  VC_PORT,
} from '../../../constants'

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
    addressType: NODE,
    address: DEFAULT_ADDRESS,
    port: '',
    portType: '',
    isAdvanced: false,
  },
}

export const ValidatorClient: Story = {
  args: {
    addressType: VALIDATOR_CLIENT,
    portType: VC,
    address: DEFAULT_ADDRESS,
    port: VC_PORT,
    isAdvanced: true,
    isSwitchOn: true,
    isChecked: true,
  },
}

export const Beacon: Story = {
  args: {
    addressType: BEACON,
    portType: BEACON,
    address: DEFAULT_ADDRESS,
    port: BEACON_PORT,
    isAdvanced: true,
    isSwitchOn: true,
    isChecked: true,
  },
}
