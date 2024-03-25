import type { Meta, StoryObj } from '@storybook/react'

import ExitPanel from './ExitPanel'

const meta = {
  title: 'ManageValidator/ExitPanel',
  component: ExitPanel,
  tags: ['autodocs'],
} satisfies Meta<typeof ExitPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
