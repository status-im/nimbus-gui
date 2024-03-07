import type { Meta, StoryObj } from '@storybook/react'
import { DashboardIcon } from '@status-im/icons'

import LeftSidebarIconButton from './LeftSidebarIconButton'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'General/LeftSidebarIconButton',
  component: LeftSidebarIconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof LeftSidebarIconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    iconEl: <DashboardIcon size={20} />,
    isDotOn: false,
    isSelected: false,
    isDisabled: false,
    id: 'dashboard',
    path: 'dashboard',
  },
}

export const DotOn: Story = {
  args: {
    iconEl: <DashboardIcon size={20} />,
    isDotOn: true,
    isSelected: false,
    isDisabled: false,
    id: 'dashboard',
    path: 'dashboard',
  },
}

export const Selected: Story = {
  args: {
    iconEl: <DashboardIcon size={20} />,
    isDotOn: false,
    isSelected: true,
    isDisabled: false,
    id: 'dashboard',
    path: 'dashboard',
  },
}
