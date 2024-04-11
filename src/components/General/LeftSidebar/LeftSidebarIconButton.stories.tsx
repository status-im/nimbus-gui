import type { Meta, StoryObj } from '@storybook/react'
import { DashboardIcon } from '@status-im/icons'
import { withRouter } from 'storybook-addon-react-router-v6'

import LeftSidebarIconButton from './LeftSidebarIconButton'
import { DASHBOARD } from '../../../constants'

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
    icon: <DashboardIcon size={20} />,
    path: DASHBOARD,
  },
}

export const Disabled: Story = {
  args: {
    icon: <DashboardIcon size={20} />,
    path: DASHBOARD,
  },
}
