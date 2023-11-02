import type { Meta, StoryObj } from '@storybook/react'

import ValidatorManagementContent from './ValidatorManagementContent'

const meta = {
  title: 'ValidatorManagement/ValidatorManagementContent',
  component: ValidatorManagementContent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ValidatorManagementContent>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {},
}
