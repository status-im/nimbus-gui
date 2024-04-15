import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import PanelContent from './PanelContent'
import MigratePanel from './MigratePanel'

const meta = {
  title: 'ManageValidator/PanelContent',
  component: PanelContent,
  decorators: [withRouter()],
  tags: ['autodocs'],
} satisfies Meta<typeof PanelContent>

export default meta
type Story = StoryObj<typeof meta>

export const MigratePanelContent: Story = {
  args: {
    children: <MigratePanel />,
    title: 'Migrate Validator',
  },
}

export const MigratePanelModalContent: Story = {
  args: {
    children: <MigratePanel />,
    title: 'Migrate Validator',
    isModalWidth: true,
  },
}
