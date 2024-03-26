import { withRouter } from 'storybook-addon-react-router-v6'
import type { Meta, StoryObj } from '@storybook/react'

import ManagementTableRow from './ManagementTableRow'
import { VALIDATORS_DATA } from '../../../constants'

const meta = {
  title: 'ValidatorManagement/ManagementTableRow',
  component: ManagementTableRow,
  parameters: {
    layout: 'centered',
  },
  decorators: [withRouter()],
  tags: ['autodocs'],
} satisfies Meta<typeof ManagementTableRow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    validator: VALIDATORS_DATA[0],
    isAllSelected: false,
  },
}
