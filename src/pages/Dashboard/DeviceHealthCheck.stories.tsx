import type { Meta, StoryObj } from '@storybook/react'

import Dashboard from './Dashboard'

const meta: Meta = {
  title: 'Pages/Dashboard',
  component: Dashboard,
  decorators: [],
  tags: ['autodocs'],
}

export default meta

type DashboardStory = StoryObj<typeof Dashboard>

export const Page: DashboardStory = {
  args: {},
}
