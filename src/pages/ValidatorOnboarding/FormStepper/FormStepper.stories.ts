import type { Meta, StoryObj } from '@storybook/react'

import FormStepper from './FormStepper'

const meta = {
  title: 'ValidatorOnboarding/FormStepper',
  component: FormStepper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FormStepper>

export default meta
type Story = StoryObj<typeof meta>

export const OverviewActive: Story = {
  args: {
    activeStep: 0,
    changeActiveStep: () => {},
  },
}

export const AdvisoriesActive: Story = {
  args: {
    activeStep: 1,
    changeActiveStep: () => {},
  },
}

export const ClientSetupActive: Story = {
  args: {
    activeStep: 2,
    changeActiveStep: () => {},
  },
}

export const ValidatorSetupActive: Story = {
  args: {
    activeStep: 3,
    changeActiveStep: () => {},
  },
}

export const KeyGenerationActive: Story = {
  args: {
    activeStep: 4,
    changeActiveStep: () => {},
  },
}

export const ActivationActive: Story = {
  args: {
    activeStep: 5,
    changeActiveStep: () => {},
  },
}

export const NoActiveStep: Story = {
  args: {
    activeStep: -1,
    changeActiveStep: () => {},
  },
}
