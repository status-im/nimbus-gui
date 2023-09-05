import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions';

// This is just a mock action for demonstration.
const myMockAction = () => ({ type: 'MY_ACTION_TYPE', payload: {} });

export const Default: Story = (args) => {
  const dispatch = useDispatch();

  // Dispatch an action when the component mounts, for example.
  useEffect(() => {
    dispatch(myMockAction());
  }, [dispatch]);

  return <ConsensusSelection {...args} />;
};

import ConsensusSelection from './ConsensusSelection'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'ValidatorOnboarding/ConsensusSelection',
  component: ConsensusSelection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter()],
} satisfies Meta<typeof ConsensusSelection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    
  },
}
