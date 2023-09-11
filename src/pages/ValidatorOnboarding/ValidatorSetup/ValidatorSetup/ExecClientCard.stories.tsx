import type { Meta, StoryObj } from '@storybook/react'

import ExecClientCard from './ExecClientCard'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'ValidatorOnboarding/ExecClientCard',
  component: ExecClientCard,
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof ExecClientCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { name: 'Erigon', icon: '/icons/erigon-circle.png' },
}
