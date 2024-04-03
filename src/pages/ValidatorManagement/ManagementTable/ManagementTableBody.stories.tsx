import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import ManagementTableBody from './ManagementTableBody'
import { VALIDATORS_DATA } from '../../../constants'

const meta = {
  title: 'ValidatorManagement/ManagementTableBody',
  component: ManagementTableBody,
  parameters: {
    layout: 'centered',
  },
  decorators: [withRouter()],
  tags: ['autodocs'],
} satisfies Meta<typeof ManagementTableBody>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    filteredValidators: VALIDATORS_DATA,
  },
}
