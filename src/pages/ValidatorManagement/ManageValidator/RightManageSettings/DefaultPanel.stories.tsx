import type { Meta, StoryObj } from '@storybook/react'

import RightManageSettings from './RightManageSettings'

const meta = {
  title: 'ValidatorManagement/RightManageSettings',
  component: RightManageSettings,
  tags: ['autodocs'],
} satisfies Meta<typeof RightManageSettings>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
