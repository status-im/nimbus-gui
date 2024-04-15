import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import MigratePanel from './MigratePanel'

const meta = {
  title: 'ManageValidator/MigratePanel',
  component: MigratePanel,
  decorators: [withRouter()],
  tags: ['autodocs'],
} satisfies Meta<typeof MigratePanel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
