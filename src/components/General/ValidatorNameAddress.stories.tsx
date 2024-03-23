import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import ValidatorNameAddress from './ValidatorNameAddress'

const meta = {
  title: 'General/ValidatorNameAddress',
  component: ValidatorNameAddress,
  tags: ['autodocs'],
  decorators: [withRouter()],
} satisfies Meta<typeof ValidatorNameAddress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: '1',
    address: 'zQ3asdf9d4Gs0',
  },
}
