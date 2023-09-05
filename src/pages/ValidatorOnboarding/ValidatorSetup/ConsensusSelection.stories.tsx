import { withRouter } from 'storybook-addon-react-router-v6'

import ConsensusSelection from './ConsensusSelection'
import { StoryObj } from '@storybook/react'

const meta = {
  title: 'ValidatorOnboarding/ConsensusSelection',
  component: ConsensusSelection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter()],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
