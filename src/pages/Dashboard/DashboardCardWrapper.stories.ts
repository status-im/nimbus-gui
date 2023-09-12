import type { Meta, StoryObj } from '@storybook/react'

import DashboardCardWrapper from './DashboardCardWrapper'

const meta: Meta = {
  title: 'Dashboard/DashboardCardWrapper',
  component: DashboardCardWrapper,
  decorators: [],
  tags: ['autodocs'],
}

export default meta

type DashboardCardWrapperStory = StoryObj<typeof DashboardCardWrapper>

export const Page: DashboardCardWrapperStory = {
  args: {},
}
