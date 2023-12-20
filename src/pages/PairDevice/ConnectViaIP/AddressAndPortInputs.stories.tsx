import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import AddressAndPortInputs from './AddressAndPortInputs'

const meta = {
  title: 'Pair Device/AddressAndPortInputs',
  component: AddressAndPortInputs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof AddressAndPortInputs>

export default meta
type Story = StoryObj<typeof meta>

export const VC: Story = {
  args: {
    addressType: 'Validator Client',
    portType: 'VC',
  },
}

export const Beacon: Story = {
  args: {
    addressType: 'Beacon',
    portType: 'Beacon',
  },
}
