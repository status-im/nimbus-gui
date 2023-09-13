import type { Meta, StoryObj } from '@storybook/react'

import AddCard from './AddCard'

const meta: Meta = {
  title: 'General/AddCard',
  component: AddCard,
  decorators: [],
  tags: ['autodocs'],
}

export default meta

type AddCardStory = StoryObj<typeof AddCard>

export const Default: AddCardStory = {
  args: {},
}
