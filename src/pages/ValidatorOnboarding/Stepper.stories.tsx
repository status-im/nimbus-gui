import type { Meta, StoryObj } from '@storybook/react'

import StepperForm from './Stepper'

const meta = {
  title: 'ValidatorOnboarding/Stepper',
  component: StepperForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof StepperForm>

export default meta
type Story = StoryObj<typeof meta>

export const Stepper: Story = {
  args: {},
}
