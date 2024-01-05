import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import PortInput from './PortInput'

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

export const VC: Story = {
  args: {
    port: '9000',
    portType: 'VC',
  },
}

export const Beacon: Story = {
  args: {
    port: '5052',
    portType: 'Beacon',
  },
}
