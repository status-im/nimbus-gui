import type { Meta, StoryObj } from '@storybook/react'

import TitleLogo from './TitleLogo'

const meta = {
  title: 'Dashboard/TitleLogo',
  component: TitleLogo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TitleLogo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
