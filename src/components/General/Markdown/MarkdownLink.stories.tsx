import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import MarkdownLink from './MarkdownLink'
import { PATHS } from '../../../constants'

const meta = {
  title: 'General/MarkdownLink',
  component: MarkdownLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter()],
} satisfies Meta<typeof MarkdownLink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    href: PATHS.LANDING,
    children: 'MarkdownLink',
  },
}
