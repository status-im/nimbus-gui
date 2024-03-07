import type { Meta, StoryObj } from '@storybook/react'

import LogsPage from './LogsPage'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'LogsPage/LogsPage',
  component: LogsPage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof LogsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
