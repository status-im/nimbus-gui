import type { Meta, StoryObj } from '@storybook/react'

import LandingPage from './LandingPage'

const meta = {
  title: 'Pages/LandingPage',
  component: LandingPage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LandingPage>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {},
}
