import type { Meta, StoryObj } from '@storybook/react'

import AddCardsContainer from './AddCardsContainer'

const meta = {
  title: 'General/AddCardsContainer',
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
    cardsAmount: 2,
  },
}

export const WithoutCards: Story = {
  args: {
    cardsAmount: 0,
  },
}
