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
  title: 'General/LeftSidebarIconButton',
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
    isSelected: false,
    isDisabled: false,
    id: 'dashboard',
  },
}

export const DotOn: Story = {
  args: {
    iconEl: <DashboardIcon size={20} />,
    isDotOn: true,
    isSelected: false,
    isDisabled: false,
    id: 'dashboard',
  },
}

export const Selected: Story = {
  args: {
    iconEl: <DashboardIcon size={20} />,
    isDotOn: false,
    isSelected: true,
    isDisabled: false,
    id: 'dashboard',
  },
}

export const Disabled: Story = {
  args: {
    iconEl: <DashboardIcon size={20} />,
    isDotOn: false,
    isSelected: false,
    isDisabled: true,
    id: 'dashboard',
  },
}

export const Dashboard: Story = {
  args: {
    iconEl: <DashboardIcon size={20} />,
    isDotOn: false,
    isSelected: true,
    isDisabled: false,
    id: 'dashboard',
  },
}

export const Speed: Story = {
  args: {
    iconEl: <SpeedIcon size={20} />,
    isDotOn: false,
    isSelected: false,
    isDisabled: false,
    id: 'speed',
  },
}

export const Chart: Story = {
  args: {
    iconEl: <ChartIcon size={20} />,
    isDotOn: false,
    isSelected: false,
    isDisabled: true,
    id: 'chart',
  },
}

export const Heart: Story = {
  args: {
    iconEl: <HeartIcon size={20} />,
    isDotOn: false,
    isSelected: false,
    isDisabled: false,
    id: 'heart',
  },
}

export const CodeBlock: Story = {
  args: {
    iconEl: <CodeBlockIcon size={20} />,
    isDotOn: false,
    isSelected: false,
    isDisabled: false,
    id: 'codeBlock',
  },
}

export const Communities: Story = {
  args: {
    iconEl: <CommunitiesIcon size={20} />,
    isDotOn: false,
    isSelected: false,
    isDisabled: false,
    id: 'communities',
  },
}

export const ActivityCenter: Story = {
  args: {
    iconEl: <ActivityCenterIcon size={20} />,
    isDotOn: true,
    isSelected: false,
    isDisabled: false,
    id: 'activityCenter',
  },
}

export const Settings: Story = {
  args: {
    iconEl: <SettingsIcon size={20} />,
    isDotOn: false,
    isSelected: false,
    isDisabled: false,
    id: 'settings',
  },
}
