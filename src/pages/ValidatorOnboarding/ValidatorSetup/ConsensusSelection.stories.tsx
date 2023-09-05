import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ConsensusSelection from './ConsensusSelection'
import { withRouter } from 'storybook-addon-react-router-v6'
import { selectClient } from '../../../redux/ValidatorOnboarding/ValidatorSetup/slice'

export default {
  title: 'ValidatorOnboarding/ConsensusSelection',
  component: ConsensusSelection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter()],
}

type ConsensusSelectionProps = React.ComponentPropsWithoutRef<typeof ConsensusSelection>

export const Default: React.FC<ConsensusSelectionProps> = args => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(selectClient('Erigon'))
  }, [dispatch])

  return <ConsensusSelection {...args} />
}
