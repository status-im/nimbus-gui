import type { Meta, StoryObj } from '@storybook/react'

import DepositPanel from './DepositPanel'

const meta = {
  title: 'ValidatorManagement/DepositPanel',
  component: DepositPanel,
  tags: ['autodocs'],
} satisfies Meta<typeof DepositPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
