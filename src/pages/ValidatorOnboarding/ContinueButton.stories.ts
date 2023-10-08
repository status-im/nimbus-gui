import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import ContinueButton from './ContinueButton'

const meta = {
  title: 'ValidatorOnboarding/ContinueButton',
  component: ContinueButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof ContinueButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    continueHandler: () => {},
    activeStep: 0,
    subStepValidatorSetup: 0,
  },
}

export const Disabled: Story = {
  args: {
    continueHandler: () => {},
    activeStep: 0,
    subStepValidatorSetup: 0,
  },
}
