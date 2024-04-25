import type { Meta, StoryObj } from '@storybook/react'

import ValidatorSettingsCards from './ValidatorSettingsCards'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'ManageValidator/ValidatorSettingsCards',
  component: ValidatorSettingsCards,
  parameters: {
    layout: 'centered',
  },
  decorators: [withRouter],
  tags: ['autodocs'],
} satisfies Meta<typeof ValidatorSettingsCards>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
