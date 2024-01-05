import type { Meta, StoryObj } from '@storybook/react'

import Header from './Header'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'General/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  decorators: [withRouter],
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    selectedTag: 'Pair',
  },
}

export const CreateTag: Story = {
  args: {
    selectedTag: 'Create',
  },
}
