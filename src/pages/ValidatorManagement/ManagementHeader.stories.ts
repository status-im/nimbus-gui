import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import ManagementHeader from './ManagementHeader'

const meta = {
  title: 'ValidatorManagement/ManagementHeader',
  component: ManagementHeader,
  parameters: {
    layout: 'centered',
  },
  decorators: [withRouter()],
  tags: ['autodocs'],
} satisfies Meta<typeof ManagementHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
