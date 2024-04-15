import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import PanelWrapper from './PanelWrapper'
import MigratePanel from './MigratePanel'

const meta = {
  title: 'ManageValidator/PanelWrapper',
  component: PanelWrapper,
  decorators: [withRouter()],
  tags: ['autodocs'],
} satisfies Meta<typeof PanelWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const WrappedMigratePanel: Story = {
  args: {
    children: <MigratePanel />,
    title: 'Migrate Validator',
  },
}
