import type { Meta, StoryObj } from '@storybook/react'

import FormStepper from './FormStepper'

const meta = {
  title: 'ValidatorOnboarding/FormStepper',
  component: FormStepper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FormStepper>

export default meta
type Story = StoryObj<typeof meta>

export const Stepper: Story = {
  args: {
    activeStep: 0,
    changeActiveStep: () => {},
  },
}
