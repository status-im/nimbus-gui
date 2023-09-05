import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import Advisories from './Advisories'

const meta = {
  title: 'ValidatorOnboarding/Advisories',
  component: Advisories,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof Advisories>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
