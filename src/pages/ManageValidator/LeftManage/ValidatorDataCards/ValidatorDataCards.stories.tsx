import type { Meta, StoryObj } from '@storybook/react'

import ValidatorDataCards from './ValidatorDataCards'

const meta = {
  title: 'ManageValidator/ValidatorDataCards',
  component: ValidatorDataCards,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ValidatorDataCards>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
