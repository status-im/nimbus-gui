import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import SetupRow from './SetupRow'

const meta = {
  title: 'ValidatorOnboarding/SetupRow',
  component: SetupRow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [withRouter],
} satisfies Meta<typeof SetupRow>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {
    title: 'Setup Row',
  },
}
