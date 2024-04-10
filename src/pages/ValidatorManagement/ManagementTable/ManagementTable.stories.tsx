import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import ManagementTable from './ManagementTable'

const meta = {
  title: 'ValidatorManagement/ManagementTable',
  component: ManagementTable,
  parameters: {
    layout: 'centered',
  },
  decorators: [withRouter()],
  tags: ['autodocs'],
} satisfies Meta<typeof ManagementTable>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
