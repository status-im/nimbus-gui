import type { Meta, StoryObj } from '@storybook/react'

import ValidatorsMenuWithPrice from './ValidatorsMenuWithPrice'

const meta = {
  title: 'General/ValidatorsMenuWithPrice',
  component: ValidatorsMenuWithPrice,
  tags: ['autodocs'],
} satisfies Meta<typeof ValidatorsMenuWithPrice>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    validatorCount: 2,
    changeValidatorCountHandler: () => {},
  },
}

export const WithoutValidatorCount: Story = {
  args: {
    validatorCount: 0,
    changeValidatorCountHandler: () => {},
  },
}

export const WithLongValidatorCount: Story = {
  args: {
    validatorCount: 2000,
    changeValidatorCountHandler: () => {},
  },
}
