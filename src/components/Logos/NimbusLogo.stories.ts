import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import NimbusLogo from './NimbusLogo'

const meta = {
  title: 'General/NimbusLogo',
  component: NimbusLogo,
  parameters: {
    layout: 'centered',
  },
  decorators: [withRouter()],
  tags: ['autodocs'],
} satisfies Meta<typeof NimbusLogo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    subtitle: 'Node Management Dashboard',
  },
}

export const WithoutSubtitle: Story = {
  args: {},
}
