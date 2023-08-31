import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import ClientSetup from './ClientSetup'

const meta = {
  title: 'ValidatorOnboarding/ClientSetup',
  component: ClientSetup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof ClientSetup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
