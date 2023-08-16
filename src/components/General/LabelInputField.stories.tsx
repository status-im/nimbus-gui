import type { Meta, StoryObj } from '@storybook/react'

import LabelInputField from './LabelInputField'

const meta = {
  title: 'General/LabelInputField',
  component: LabelInputField,
  tags: ['autodocs'],
} satisfies Meta<typeof LabelInputField>

export default meta
type Story = StoryObj<typeof meta>

export const InputFieldWithoutText: Story = {
  args: {
    labelText: '',
    placeholderText: '',
  },
}

export const InputFieldWithText: Story = {
  args: {
    labelText: 'Input Label',
    placeholderText: 'Placeholder Text',
  },
}
export const InputFieldLabelOnly: Story = {
  args: {
    labelText: 'Input Label',
    placeholderText: '',
  },
}
export const InputFieldPlaceholderOnly: Story = {
  args: {
    labelText: '',
    placeholderText: 'Placeholder Text',
  },
}
