import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import ValidatorOnboarding from './ValidatorOnboarding'
import { Provider as ReduxProvider } from 'react-redux'
import store from '../../redux/store'

const withRedux = (StoryComponent: any) => {
  return (
    <ReduxProvider store={store} >
      <StoryComponent />
    </ReduxProvider>
  );
}
const meta = {
  title: 'Pages/ValidatorOnboarding',
  component: ValidatorOnboarding,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter(), withRedux],
} satisfies Meta<typeof ValidatorOnboarding>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {},
}
