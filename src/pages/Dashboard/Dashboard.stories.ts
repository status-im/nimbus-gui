import type { Meta, StoryObj } from '@storybook/react'

import Dashboard from './Dashboard'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'Pages/Dashboard',
  component: Dashboard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof Dashboard>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {},
}
