import type { Meta, StoryObj } from '@storybook/react'

import ManagementTabs from './ManagementTabs'

const meta = {
  title: 'ValidatorManagement/ManagementTabs',
  component: ManagementTabs,
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
