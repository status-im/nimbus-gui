import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import ValidatorDataTabs from './ValidatorDataTabs'

const meta = {
  title: 'ManageValidator/ValidatorDataTabs',
  component: ValidatorDataTabs,
  decorators: [withRouter],
  tags: ['autodocs'],
} satisfies Meta<typeof ValidatorDataTabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
