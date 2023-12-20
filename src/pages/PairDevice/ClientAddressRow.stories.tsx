import type { Meta, StoryObj } from '@storybook/react'

import ClientAddressRow from './ClientAddressRow'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'Connect-Device/ClientAddressRow',
  component: ClientAddressRow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof ClientAddressRow>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {},
}
