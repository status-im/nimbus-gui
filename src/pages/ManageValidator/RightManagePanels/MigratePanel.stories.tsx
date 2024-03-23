import type { Meta, StoryObj } from '@storybook/react'

import MigratePanel from './MigratePanel'

const meta = {
  title: 'ValidatorManagement/MigratePanel',
  component: MigratePanel,
  tags: ['autodocs'],
} satisfies Meta<typeof MigratePanel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
