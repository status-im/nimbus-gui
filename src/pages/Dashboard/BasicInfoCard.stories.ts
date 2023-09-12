import type { Meta, StoryObj } from '@storybook/react'

import BasicInfoCard from './BasicInfoCard'

const meta: Meta = {
  title: 'Dashboard/BasicInfoCard',
  component: BasicInfoCard,
  decorators: [],
  tags: ['autodocs'],
}

export default meta

type BasicInfoCardStory = StoryObj<typeof BasicInfoCard>

export const Page: BasicInfoCardStory = {
  args: {},
}
