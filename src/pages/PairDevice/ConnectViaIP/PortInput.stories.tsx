import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import PortInput from './PortInput'
import { BEACON, BEACON_PORT, VC, VC_PORT } from '../../../constants'

const meta = {
  title: 'Pair Device/PortInput',
  component: PortInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof PortInput>

export default meta
type Story = StoryObj<typeof meta>

export const ValidatorClient: Story = {
  args: {
    port: VC_PORT,
    portType: VC,
  },
}

export const Beacon: Story = {
  args: {
    port: BEACON_PORT,
    portType: BEACON,
  },
}
