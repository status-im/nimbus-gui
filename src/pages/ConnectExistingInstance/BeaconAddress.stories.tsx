import type { Meta, StoryObj } from '@storybook/react'

import BeaconAddress from './BeaconAddress'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
    title: 'Connect-Device/BeaconAddress',
    component: BeaconAddress,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [withRouter],
} satisfies Meta<typeof BeaconAddress>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
    args: {},
}
