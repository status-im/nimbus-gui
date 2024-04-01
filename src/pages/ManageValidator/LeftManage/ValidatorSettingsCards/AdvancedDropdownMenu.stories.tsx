import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import AdvancedDropdownMenu from './AdvancedDropdownMenu'

const meta = {
  title: 'ManageValidator/AdvancedDropdownMenu',
  component: AdvancedDropdownMenu,
  decorators: [withRouter()],
  tags: ['autodocs'],
} satisfies Meta<typeof AdvancedDropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Advanced',
  },
}
