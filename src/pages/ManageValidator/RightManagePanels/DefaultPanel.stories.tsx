import type { Meta, StoryObj } from '@storybook/react'

import DefaultPanel from './DefaultPanel'

const meta = {
  title: 'ManageValidator/DefaultPanel',
  component: DefaultPanel,
  tags: ['autodocs'],
} satisfies Meta<typeof DefaultPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
