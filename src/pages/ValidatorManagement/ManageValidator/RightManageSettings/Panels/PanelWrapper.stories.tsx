import type { Meta, StoryObj } from '@storybook/react'

import PanelWrapper from './PanelWrapper'
import MigratePanel from './MigratePanel'
import DepositPanel from './DepositPanel'

const meta = {
  title: 'ValidatorManagement/PanelWrapper',
  component: PanelWrapper,
  tags: ['autodocs'],
} satisfies Meta<typeof PanelWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const WrappedMigratePanel: Story = {
  args: {
    children: <MigratePanel />,
  },
}

export const WrappedDepositPanel: Story = {
  args: {
    children: <DepositPanel />,
  },
}
