import type { Meta, StoryObj } from '@storybook/react'

import ManagementHeader from './ManagementHeader'

const meta = {
  title: 'ValidatorManagement/ManagementHeader',
  component: ManagementHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ManagementHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
