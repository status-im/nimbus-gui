import type { Meta, StoryObj } from '@storybook/react'

import DefaultPanel from './DefaultPanel'

const meta = {
  title: 'ValidatorManagement/DefaultPanel',
  component: DefaultPanel,
  tags: ['autodocs'],
} satisfies Meta<typeof DefaultPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
