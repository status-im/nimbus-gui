import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import LeftManage from './LeftManage'

const meta = {
  title: 'ManageValidator/LeftManage',
  component: LeftManage,
  decorators: [withRouter],
  tags: ['autodocs'],
} satisfies Meta<typeof LeftManage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
