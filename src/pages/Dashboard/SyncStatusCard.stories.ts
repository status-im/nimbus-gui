import type { Meta, StoryObj } from '@storybook/react'

import SyncStatusCard from './SyncStatusCard'

const meta: Meta = {
  title: 'Dashboard/SyncStatusCard',
  component: SyncStatusCard,
  decorators: [],
  tags: ['autodocs'],
}

export default meta

type SyncStatusCardStory = StoryObj<typeof SyncStatusCard>

export const Page: SyncStatusCardStory = {
  args: {},
}
