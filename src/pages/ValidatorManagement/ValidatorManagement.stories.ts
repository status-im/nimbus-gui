import type { StoryObj } from '@storybook/react'

import ValidatorManagement from './ValidatorManagement'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'Pages/ValidatorManagement',
  component: ValidatorManagement,
  parameters: {
    layout: 'centered',
  },
  decorators: [withRouter()],
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {},
}
