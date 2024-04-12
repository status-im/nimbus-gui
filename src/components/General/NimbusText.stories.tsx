import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import NimbusText from './NimbusText'

const meta = {
  title: 'General/NimbusText',
  component: NimbusText,
  parameters: {
    layout: 'centered',
  },
  decorators: [withRouter()],
  tags: ['autodocs'],
} satisfies Meta<typeof NimbusText>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
