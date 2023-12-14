import type { Meta, StoryObj } from '@storybook/react'

import ValidatorManagement from './ValidatorManagement'

const meta = {
  title: 'Pages/ValidatorManagement',
  component: ValidatorManagement,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ValidatorManagement>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {},
}
