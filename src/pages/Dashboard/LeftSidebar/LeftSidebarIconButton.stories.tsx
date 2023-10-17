import type { Meta, StoryObj } from '@storybook/react'
import {
  DashboardIcon,
  SpeedIcon,
  ChartIcon,
  HeartIcon,
  CodeBlockIcon,
  CommunitiesIcon,
  ActivityCenterIcon,
  SettingsIcon,
} from '@status-im/icons'

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
    isDotOn: false,
    selected: false,
    disabled: false,
    id: 'dashboard',
  },
}

export const WithDot: Story = {
  args: {
    iconEl: <DashboardIcon size={20} />,
    isDotOn: true,
    selected: false,
    disabled: false,
    id: 'dashboard',
  },
}

export const Selected: Story = {
  args: {
    iconEl: <DashboardIcon size={20} />,
    isDotOn: false,
    selected: true,
    disabled: false,
    id: 'dashboard',
  },
}

export const Disabled: Story = {
  args: {
    iconEl: <DashboardIcon size={20} />,
    isDotOn: false,
    selected: false,
    disabled: true,
    id: 'dashboard',
  },
}

export const Dashboard: Story = {
  args: {
    iconEl: <DashboardIcon size={20} />,
    isDotOn: false,
    selected: true,
    disabled: false,
    id: 'dashboard',
  },
}

export const Speed: Story = {
  args: {
    iconEl: <SpeedIcon size={20} />,
    isDotOn: false,
    selected: false,
    disabled: false,
    id: 'speed',
  },
}

export const Chart: Story = {
  args: {
    iconEl: <ChartIcon size={20} />,
    isDotOn: false,
    selected: false,
    disabled: true,
    id: 'chart',
  },
}

export const Heart: Story = {
  args: {
    iconEl: <HeartIcon size={20} />,
    isDotOn: false,
    selected: false,
    disabled: false,
    id: 'heart',
  },
}

export const CodeBlock: Story = {
  args: {
    iconEl: <CodeBlockIcon size={20} />,
    isDotOn: false,
    selected: false,
    disabled: false,
    id: 'codeBlock',
  },
}

export const Communities: Story = {
  args: {
    iconEl: <CommunitiesIcon size={20} />,
    isDotOn: false,
    selected: false,
    disabled: false,
    id: 'communities',
  },
}

export const ActivityCenter: Story = {
  args: {
    iconEl: <ActivityCenterIcon size={20} />,
    isDotOn: true,
    selected: false,
    disabled: false,
    id: 'activityCenter',
  },
}

export const Settings: Story = {
  args: {
    iconEl: <SettingsIcon size={20} />,
    isDotOn: false,
    selected: false,
    disabled: false,
    id: 'settings',
  },
}
