import type { Meta, StoryObj } from '@storybook/react'

import ManagementTableBody from './ManagementTableBody'
import { VALIDATORS_DATA } from '../../../constants'

const meta = {
  title: 'ValidatorManagement/ManagementTableBody',
  component: ManagementTableBody,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ManagementTableBody>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    filteredValidators: VALIDATORS_DATA,
  },
}
