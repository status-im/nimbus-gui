import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import ManagementTabs from './ManagementTabs'

const meta = {
  title: 'ValidatorManagement/ManagementTabs',
  component: ManagementTabs,
  decorators: [withRouter()],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ManagementTabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
