import type { Meta, StoryObj } from '@storybook/react'

import TamaguiSwitch from './TamaguiSwitch'

const meta = {
  title: 'General/TamaguiSwitch',
  component: TamaguiSwitch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TamaguiSwitch>

export default meta
type Story = StoryObj<typeof meta>

export const On: Story = {
  args: {
    isSwitchOn: true,
    onSwitchChange: () => {},
  },
}

export const Off: Story = {
  args: {
    isSwitchOn: false,
    onSwitchChange: () => {},
  },
}
