import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import NimbusLogoMark from './NimbusLogoMark'

const meta = {
  title: 'General/NimbusLogoMark',
  component: NimbusLogoMark,
  tags: ['autodocs'],
  decorators: [withRouter()],
} satisfies Meta<typeof NimbusLogoMark>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
