import type { Meta, StoryObj } from '@storybook/react'
import { DashboardIcon } from '@status-im/icons'
import { withRouter } from 'storybook-addon-react-router-v6'

import LeftSidebarIconButton from './LeftSidebarIconButton'

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
    isDisabled: false,
    path: 'dashboard',
  },
}

export const DotOn: Story = {
  args: {
    iconEl: <DashboardIcon size={20} />,
    isDotOn: true,
    isDisabled: false,
    path: 'dashboard',
  },
}
