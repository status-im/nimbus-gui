import type { Meta, StoryObj } from '@storybook/react'

import ManagementTableHeader from './ManagementTableHeader'

const meta = {
  title: 'ValidatorManagement/ManagementTableHeader',
  component: ManagementTableHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ManagementTableHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    validatorsAmount: 4,
  },
}
