import type { Meta, StoryObj } from '@storybook/react'

import AddCardsContainer from './AddCardsContainer'

const meta = {
  title: 'Dashboard/AddCardsContainer',
  component: AddCardsContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AddCardsContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Default',
  },
}
