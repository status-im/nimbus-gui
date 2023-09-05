import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { withRouter } from 'storybook-addon-react-router-v6'

import { selectClient } from '../../../redux/ValidatorOnboarding/ValidatorSetup/slice'
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

export const Default: Story = (args: any ) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(selectClient('Erigon'))
  }, [])

  return <ConsensusSelection {...args} />
}
