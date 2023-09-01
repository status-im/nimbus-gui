import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import ValidatorOnboarding from './ValidatorOnboarding'

const meta = {
  title: 'Pages/ValidatorOnboarding',
  component: ValidatorOnboarding,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter()],
} satisfies Meta<typeof ValidatorOnboarding>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {},
}
