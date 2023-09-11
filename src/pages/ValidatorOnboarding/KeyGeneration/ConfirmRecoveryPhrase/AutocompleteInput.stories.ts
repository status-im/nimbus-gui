import type { Meta, StoryObj } from '@storybook/react'

import AutocompleteInput from './AutocompleteInput'

const meta = {
  title: 'ValidatorOnboarding/AutocompleteInput',
  component: AutocompleteInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AutocompleteInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    index: 0,
  },
}

export const OtherWord: Story = {
  args: {
    index: 2,
  },
}
