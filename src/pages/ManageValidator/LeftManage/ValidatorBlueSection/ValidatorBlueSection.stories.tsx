import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import ValidatorBlueSection from './ValidatorBlueSection'

const meta = {
  title: 'ManageValidator/ValidatorBlueSection',
  component: ValidatorBlueSection,
  decorators: [withRouter()],
  tags: ['autodocs'],
} satisfies Meta<typeof ValidatorBlueSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
