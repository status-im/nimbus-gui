import type { Meta, StoryObj } from '@storybook/react'

import ValidatorBlueSection from './ValidatorBlueSection'

const meta = {
  title: 'ManageValidator/ValidatorBlueSection',
  component: ValidatorBlueSection,
  tags: ['autodocs'],
} satisfies Meta<typeof ValidatorBlueSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
