import type { Meta, StoryObj } from '@storybook/react'

import ConnectDevicePage from './ConnectDevicePage'

const meta = {
  title: 'Pages/ConnectDevicePage',
  component: ConnectDevicePage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ConnectDevicePage>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {},
}
