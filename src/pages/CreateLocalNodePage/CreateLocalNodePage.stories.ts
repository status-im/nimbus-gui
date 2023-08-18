import type { Meta, StoryObj } from '@storybook/react'

import CreateLocalNodePage from './CreateLocalNodePage'

const meta = {
  title: 'Pages/CreateLocalNodePage',
  component: CreateLocalNodePage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CreateLocalNodePage>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {},
}
