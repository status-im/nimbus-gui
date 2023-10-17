import type { Meta, StoryObj } from '@storybook/react'
import { DashboardIcon } from '@status-im/icons'

import LeftSidebarIconButton from './LeftSidebarIconButton'

const meta = {
  title: 'Dashboard/LeftSidebarIconButton',
  component: LeftSidebarIconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LeftSidebarIconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    iconEl: <DashboardIcon size={20} />,
    variant: 'outline',
    isDotOn: true,
    selected: true,
    disabled: false,
    id: 'dashboard',
  },
}
