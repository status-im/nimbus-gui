import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import PairDevice from './PairDevice'

const meta = {
  title: 'Pages/PairDevice',
  component: PairDevice,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [withRouter],
} satisfies Meta<typeof PairDevice>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {},
}
