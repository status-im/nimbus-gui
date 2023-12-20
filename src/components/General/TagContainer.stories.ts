import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import TagContainer from './TagContainer'

const meta = {
  title: 'General/TagContainer',
  component: TagContainer,
  parameters: {
    layout: 'centered',
  },
  decorators: [withRouter],
  tags: ['autodocs'],
} satisfies Meta<typeof TagContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Pair: Story = {
  args: {
    selectedTag: 'pair',
  },
}

export const Create: Story = {
  args: {
    selectedTag: 'create',
  },
}
