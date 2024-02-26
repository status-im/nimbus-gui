import type { Meta, StoryObj } from '@storybook/react'
import TitleLogo from '../../components/General/TitleLogo'

const meta = {
  title: 'LogsPage/TitleLogo',
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
