import type { Meta, StoryObj } from '@storybook/react'

import Markdown from './Markdown'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'General/Markdown',
  component: Markdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter()],
} satisfies Meta<typeof Markdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children:
      '### macOS\n\nRun the following commands to add the Nethermind repository to your local Homebrew and install:\n\n```\nbrew tap nethermindeth/nethermind\nbrew install nethermind\n```',
  },
}
