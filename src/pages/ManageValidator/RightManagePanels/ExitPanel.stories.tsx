import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import ExitPanel from './ExitPanel'

const meta = {
  title: 'ManageValidator/ExitPanel',
  component: ExitPanel,
  decorators: [withRouter()],
  tags: ['autodocs'],
} satisfies Meta<typeof ExitPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
