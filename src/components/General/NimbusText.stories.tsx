import type { Meta, StoryObj } from '@storybook/react'

import NimbusText from './NimbusText'

const meta = {
  title: 'General/NimbusText',
  component: NimbusText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NimbusText>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
