import type { Meta, StoryObj } from '@storybook/react'

import ValidatorSettingCard from './ValidatorSettingCard'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'ManageValidator/ValidatorSettingCard',
  component: ValidatorSettingCard,
  parameters: {
    layout: 'centered',
  },
  decorators: [withRouter],
  tags: ['autodocs'],
} satisfies Meta<typeof ValidatorSettingCard>

export default meta
type Story = StoryObj<typeof meta>

export const Variant1: Story = {
  args: { title: 'Exit' },
}
export const Variant2: Story = {
  args: { title: 'Migrate' },
}

export const Variant3: Story = {
  args: { title: 'Advanced' },
}
