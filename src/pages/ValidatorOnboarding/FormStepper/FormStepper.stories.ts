import type { Meta, StoryObj } from '@storybook/react'

import FormStepper from './FormStepper'

const meta = {
  title: 'ValidatorOnboarding/FormStepper',
  component: FormStepper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    activeStep: {
      options: [0, 1, 2, 3, 4, 5],
      control: { type: 'radio' },
      defaultValue: 0,
    },
  },
} satisfies Meta<typeof FormStepper>

export default meta
type Story = StoryObj<typeof meta>

export const OverviewActive: Story = {
  args: {
    activeStep: 0,
  },
}

export const AdvisoriesActive: Story = {
  args: {
    activeStep: 1,
  },
}

export const ClientSetupActive: Story = {
  args: {
    activeStep: 2,
  },
}

export const ValidatorSetupActive: Story = {
  args: {
    activeStep: 3,
  },
}

export const KeyGenerationActive: Story = {
  args: {
    activeStep: 4,
  },
}

export const ActivationActive: Story = {
  args: {
    activeStep: 5,
  },
}

export const NoActiveStep: Story = {
  args: {
    activeStep: -1,
  },
}
