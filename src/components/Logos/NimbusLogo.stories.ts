import type { Meta, StoryObj } from '@storybook/react'

import NimbusLogo from './NimbusLogo'

const meta = {
  title: 'General/NimbusLogo',
  component: NimbusLogo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NimbusLogo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    subtitle: 'Node Management Dashboard',
  },
}

export const WithoutSubtitle: Story = {
  args: {},
}
