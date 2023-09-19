import type { Meta, StoryObj } from '@storybook/react'

import Validators from './Validators'

const meta = {
  title: 'ValidatorOnboarding/Validators',
  component: Validators,
  tags: ['autodocs'],
} satisfies Meta<typeof Validators>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    validatorCount: 2,
    addValidatorHandler: () => {},
    changeValidatorCountHandler: () => {},
  },
}
