import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import Dashboard from './Dashboard'

const meta: Meta = {
  title: 'Pages/Dashboard',
  component: Dashboard,
  decorators: [withRouter()],
  tags: ['autodocs'],
}

export default meta

type DashboardStory = StoryObj<typeof Dashboard>

export const Page: DashboardStory = {
  args: {},
}
