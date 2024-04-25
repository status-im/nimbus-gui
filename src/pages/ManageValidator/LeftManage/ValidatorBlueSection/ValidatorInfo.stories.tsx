import type { Meta, StoryObj } from '@storybook/react'

import ValidatorInfo from './ValidatorInfo'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'ManageValidator/ValidatorInfo',
  component: ValidatorInfo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof ValidatorInfo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
