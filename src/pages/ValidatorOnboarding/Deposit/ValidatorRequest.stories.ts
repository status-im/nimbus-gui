import type { Meta, StoryObj } from '@storybook/react'

import ValidatorRequest from './ValidatorRequest'

const meta = {
  title: 'ValidatorOnboarding/ValidatorRequest',
  component: ValidatorRequest,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ValidatorRequest>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    validator: {
      name: '1',
      address: 'zQ3asdf9d4Gs0',
    },
  },
}

export const WithoutName: Story = {
  args: {
    validator: {
      name: '',
      address: 'zQ3asdf9d4Gs0',
    },
  },
}

export const WithoutAddress: Story = {
  args: {
    validator: {
      name: '1',
      address: '',
    },
  },
}

export const WithoutValues: Story = {
  args: {
    validator: {
      name: '',
      address: '',
    },
  },
}
