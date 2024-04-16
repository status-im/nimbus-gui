import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import PanelImage from './PanelImage'

const meta = {
  title: 'ManageValidator/PanelImage',
  component: PanelImage,
  decorators: [withRouter()],
  tags: ['autodocs'],
} satisfies Meta<typeof PanelImage>

export default meta
type Story = StoryObj<typeof meta>

export const MigratePanelImage: Story = {
  args: {
    imagePath: 'migrate.png',
    text: 'You are about to Migrate your validator it is not possible for you to revert this action! Please make sure you understand the consequences.',
  },
}

export const ExitPanelImage: Story = {
  args: {
    imagePath: 'exit-validator.png',
    text: 'You are about to Exit your validator it is not possible for you to revert this action! Please make sure you understand the consequences.',
  },
}
