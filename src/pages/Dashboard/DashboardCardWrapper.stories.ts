import type { Meta, StoryObj } from '@storybook/react'

import DashboardCardWrapper from './DashboardCardWrapper'

const meta = {
  title: 'Dashboard/DashboardCardWrapper',
  component: DashboardCardWrapper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DashboardCardWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'DashboardCardWrapper',
  },
}
